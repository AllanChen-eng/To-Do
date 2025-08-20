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
    this.tasklist = []; // array of tasks
    this.projectCompletion = false;
  }

  addTask(task) {
    this.tasklist.push(task);
  }

  printTasks() {
    this.tasklist.forEach((task) => {
      console.log("All tasks:");
      console.log(task.getJob());
    });
  }
  getTitle(){
    return this.title;
  }
  changeTitle(newTitle) {
    this.title = newTitle;
  }
  getDescription(){
    return this.description;
  }
  changeDescription(bigText){
    this.description = bigText;
  }
}
