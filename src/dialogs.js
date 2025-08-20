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
const setEditProjectDialog = () =>{
const changeProjectBtn = document.querySelector(".edit-project-btn");
const dialogID = document.querySelector("#edit-project-dialog");
const editForm = document.querySelector(".edit-project-form");
const titleInput = document.querySelector("#change-title");
const descriptionInput = document.querySelector("#change-description");
const cancelBtn = document.querySelector("#cancel-project-edit-dialog");

changeProjectBtn.addEventListener("click", ()=>{
    descriptionInput.value = currentProject.getDescription();
    titleInput.value = currentProject.getTitle();
    dialogID.showModal();
})
cancelBtn.addEventListener("click",()=>{
    dialogID.close();
})

editForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    const newTitle = titleInput.value;
    const description = descriptionInput.value;
    currentProject.changeTitle(newTitle);
    currentProject.changeDescription(description);
    ui.updateProjectTitle(newTitle);
    ui.updateProjectDescription(description);
    dialogID.close();
})

}
    return{setTaskDialog, setEditProjectDialog};
}