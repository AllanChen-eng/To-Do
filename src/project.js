import { ProjectpageUI } from "./UIHandler.js";
import { task } from "./task.js";
const ui = ProjectpageUI();

export class Project {
  constructor(
    title = "Project Title",
    description = "My Project Description",
    dueDate = "0/0",
    priority = "med",
    taskManager = [],
    projectCompletion = false,
    counter = 0,
    currentTask = ""
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.taskManager = taskManager;
    this.projectCompletion = projectCompletion;
    this.counter = counter;
    this.currentTask = currentTask;
  }
  getTitle() {
    return this.title;
  }
  changeTitle(newTitle) {
    this.title = newTitle;
    ui.setProjectTitle(newTitle);
  }
  getDescription() {
    return this.description;
  }
  changeDescription(bigText) {
    this.description = bigText;
    ui.updateProjectDescription(bigText);
  }
  getPriority() {
    return this.priority;
  }
  changePriority(prior) {
    this.priority = prior;
  }
  swapProjectCompletion() {
    if (this.projectCompletion == false) this.projectCompletion = true;
    else this.projectCompletion = false;
  }
  getCompletion() {
    return this.projectCompletion;
  }
  getAllTasks(){
    return this.taskManager;
  }
  addTask(description) {
    if (description == null || description == "") return;
    var newTask = task(description,false, this.counter);
    this.counter++;
    this.taskManager.push(newTask);
    ui.addTask(newTask, this);
  }
  getTask(taskID) {
    return this.taskManager.find((task) => task.getID() == taskID);
  }
  removeTask(taskID) {
    const index = this.taskManager.findIndex((task) => task.getID() == taskID);
    if (index != -1) {
      this.taskManager.splice(index, 1);
    }
    console.log(index + "vs Task ID" + taskID);
  }
  getCounter() {
    return this.counter;
  }
  setCurrentTask(newTask){
    //used to cordinate edit task dialog with specific task pressed
    this.currentTask = newTask;
  }
  getCurrentTask(){
    return this.currentTask;
  }
}
