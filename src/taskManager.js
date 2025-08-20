import { buttonManager } from "./buttonManager"
import { task } from "./task";
const btnManager = buttonManager();


export const taskManager = () => {
    let taskList = [];

    const createTask = (desciption) =>{
        var newTask = task(description);
        taskList.push();
    }
    const deleteTask = (index) =>{
        if(taskList.length>index && index>=0){
            taskList.splice(index,1);
        }
    }
    return{createTask};

}