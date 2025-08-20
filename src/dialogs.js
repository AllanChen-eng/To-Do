import { task } from "./task";
import { ProjectpageUI } from "./DomHandler.js";
const ui = ProjectpageUI();

export function setDialog(project){
    const currentProject = project;
const setTaskDialog = () =>{
    const addTaskBtn = document.querySelector(".add-task-btn");
    const dialog = document.getElementById("task-dialog");
    const cancelBtn = document.querySelector("#cancelDialog");
    const submitBtn = document.querySelector("#confirmBtn");
    const form = document.querySelector(".task-form");
    const newTask = document.querySelector("#addTask");

    addTaskBtn.addEventListener("click", () => {
        dialog.showModal();
    })
    cancelBtn.addEventListener("click",() =>{
        dialog.close();
    })
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const projectTask = task(newTask.value);
        console.log("adding " + newTask.value + "to current project");
        currentProject.addTask(projectTask);
        ui.addTask(newTask.value);
        dialog.close();
    })
}
    return{setTaskDialog};
}