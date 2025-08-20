export class project{
    constructor(title = "title", description ="My Project", dueDate = "0/0", priority = "med"){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.tasklist = []; // array of tasks
        this.projectCompletion = false;
    }
    addTask(task){
        this.tasklist.push(task);
    }
    printTasks(){
        this.tasklist.forEach(task => {
            console.log(task.getJob());
        });
    }

}