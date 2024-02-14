/*Use at least one array.
Use at least two classes.
Your menu should have the options to create, view, and delete elements.*/
/*Creating an app that let technicians check-in and check-out tool available in inventory*/
//Creating a tool class to store information about the tool in inventory, it can show if the tool can be used or not based 
//on future calibration date
class Tool{
    constructor(type,ID,futureCalibration){
        this.type=type;
        this.ID=ID;
        this.futureCalibration=futureCalibration;
    }
    describe(){
        //getting the timestamp at the moment the code runs
        let timestamp = Date();
        //check if the tool is valid to use or it needs to be calibrated
        if (this.futureCalibration>timestamp){
            console.log(`The ${this.type} with ID number ${this.ID} is valid to use`);
        }
        else {console.log(`The ${this.type} with ID number ${this.ID} CANNOT be used. Please schedule for calibration.`)};
    }
}
//Showing the current date
console.log(Date());
//Option to add new tool to tool list
class List{
    constructor(){
      this.inventory=[];
    }
    addTool(newTool){
      this.inventory.push(newTool);
    }
    displayTool(){
      for (let i=0;i<this.inventory.length;i++)
      {
        console.log(`The ${this.inventory[i].type} with ID ${this.inventory[i].ID} needs calibration on ${this.inventory[i].futureCalibration}\n`);
      }
    }
}
let tool1=new Tool("pin",45,"Jan 1, 2024");
let tool2=new Tool("gage",12,"March 1, 2024");
  tool1.describe();
  tool2.describe();
  let list=new List();
  list.addTool(tool1);
  list.addTool(tool2);
  list.displayTool();