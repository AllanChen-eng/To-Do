import "./styles.css";
import { buttonManager } from "./buttonManager.js";
import { taskManager } from "./taskManager.js";
import { task } from "./task.js";
import { project } from "./project.js";
import { ProjectpageUI } from "./DomHandler.js";
import { setDialog } from "./dialogs.js";

const ui = ProjectpageUI();

let currentProject = new project();
const dialog = setDialog(currentProject);
dialog.setTaskDialog();
dialog.setEditProjectDialog();
function curentView(){
    let currentView;
    const setCurrentView = () =>{

    }
}