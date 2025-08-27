import "./styles.css";
import { buttonManager } from "./buttonManager.js";
import { task } from "./task.js";
import { project } from "./project.js";
import { ProjectpageUI } from "./UIHandler.js";
import { setDialog } from "./UserDialogs.js";

const ui = ProjectpageUI();
let currentProject = new project();
const dialog = setDialog(currentProject);
dialog.setAddTaskDialog();
dialog.setEditTaskDialog();
dialog.setEditProjectDialog();
dialog.setPriorityOptions();
dialog.setCompletionBtn();
function curentView(){
    let currentView;
    const setCurrentView = () =>{

    }
}