import { buttonManager } from "./buttonManager"
import { task } from "./task";
const btnManager = buttonManager();


export const taskManager = () => {
    let taskList = [];

    const createTask = (desciption) =>{
        var newTask = task(description);
        taskList.push();
    }

    const createAddTaskButton = ()=>{
       const btn = btnManager.createButton(document.createTextNode("Add Task"),"add-task-btn"); // change this to text after
    }

    return{ createAddTaskButton, createTask};

}