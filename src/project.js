import { ProjectpageUI } from "./UIHandler.js";
import { task } from "./task.js";
const ui = ProjectpageUI();

export class project {
  constructor(
    title = "Project Title",
    description = "My Project",
    dueDate = "0/0",
    priority = "med"
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.taskManager = []
    this.projectCompletion = false;
    this.counter = 0;
  }
  getTitle(){
    return this.title;
  }
  changeTitle(newTitle) {
    this.title = newTitle;
    ui.setProjectTitle(newTitle);
  }
  getDescription(){
    return this.description;
  }
  changeDescription(bigText){
    this.description = bigText;
    ui.updateProjectDescription(bigText);
  }
  getPriority(){
    return this.priority;
  }
  changePriority(prior){
    this.priority = prior;
  }
  swapProjectCompletion(){
    if(this.projectCompletion == false) this.projectCompletion = true;
    else this.projectCompletion = false;
  }
  getCompletion(){
    return this.projectCompletion;
  }
  addTask(description){
    if(description == null || description == "") return;
    this.counter ++;
    var newTask = task(description);
    newTask.setID(this.counter);
    this.taskManager.push(newTask);
    ui.addTask(newTask, this);
  }
  removeTask(taskID){
  const index = this.taskManager.findIndex(task => task.getID() === taskID);
  console.log("Removing:" + taskID);
  if (index !== -1) {
    this.taskManager.splice(index, 1);
  }
  }
  getTask(taskID){
    return this.taskManager.find(task => task.getID() == taskID);
  }
  getCounter(){
    return this.counter;
  }
}
