/*Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.*/
/*Creating a platform that let user add in and check-out tool available in inventory*/
//Creating a tool class to store information about the tool in inventory, it can show if the tool can be used or not based 
//on future calibration date
class Tool{
    constructor(type,ID,futureCalibration){
        this.type=type;
        this.ID=ID;
        this.futureCalibration=new Date(futureCalibration);
    }
    describe(){
        //getting the timestamp at the moment the code runs
        let timestamp = new Date();
        //check if the tool is valid to use or it needs to be calibrated
        if (this.futureCalibration>timestamp){
            alert(`The ${this.type} with ID number ${this.ID} is valid to use`);
        }
        else {alert(`The ${this.type} with ID number ${this.ID} CANNOT be used. Please schedule for calibration.`)};
    }
}

//create a list of tasks that operator can do to the tool inventory
class Task{
  constructor(){
    this.list=[];
  }
//method to show all available tasks
start(){
  let selection = this.showAllTasks();
  //if user choose anything from 1-4 then there are 4 things they can do on the task list
  while (selection!=0){
    switch(selection){
    case '1':
      this.submitNewTool();
      break;
    case '2':
      this.showInventory();
      break;
    case '3':
      this.deleteTool();
      break;
    case '4':
      this.checkingOut();
      break; 
    default: selection=0;
    }
    //keep popping up the tasks list after user chose the task action
    selection=this.showAllTasks();
  }
//when 0 is chosen then it will close the task list
  alert('Closing Task List')
}
showAllTasks(){
  return prompt(`
  0) exit
  1) Submit new tool into the system
  2) Show available tools in inventory
  3) Delete tool
  4) Check out a tool
  `);
}
//Add a new tool to the list
submitNewTool(){
  let type = prompt(`What type of tool?`);
  let ID = prompt(`Please input ID number:`);
  let futureCalibration=prompt(`Enter the date for future calibration in format (Month DD, YYYY)`);
  //this.list.addTool
  let newTool= new Tool(type,ID,futureCalibration);
  this.list.push(newTool);
}
//Show a list of available tools and creating indexes 
showInventory(){
      let listString = '';
      for (let i=0;i<this.list.length;i++)
      {
        listString += i+ ') ' + ' Tool '+ this.list[i].type+' with ID '+ this.list[i].ID + ' needs calibration on '+
        this.list[i].futureCalibration+ '\n';
      }
      alert(listString);
}
//delete a tool from the array by taking index from the prompt command
deleteTool(){
  let index = prompt('Enter the index of tool you want to delete ');
  if (index > -1 && index < this.list.length) {
  this.list.splice(index,1);
}
}
//when user check out the tool, it's going to prompt if the tool is usable or not. If it can be used then the system 
//removes it from the inventory list
checkingOut(){
  let index = prompt('Enter the index of tool you want to checkout ');
  if (index > -1 && index < this.list.length) {
    this.list[index].describe();
    if (this.list[index].futureCalibration>new Date()){
      this.list.splice(index,1);
      this.showInventory();
}
}
}
}
let menu=new Task()
menu.start()