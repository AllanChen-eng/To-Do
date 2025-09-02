import "./styles.css";
import { task } from "./task.js";
import { Project } from "./project.js";
import { ProjectpageUI } from "./UIHandler.js";
import { setDialog } from "./UserDialogs.js";
import { ProjectManager } from "./ProjectManager.js";

const ui = ProjectpageUI();
let currentProject = new Project();
let projectManager = new ProjectManager();
const dialog = setDialog(currentProject);
dialog.setAddTaskDialog();
dialog.setEditTaskDialog();
dialog.setEditProjectDialog();
dialog.setPriorityOptions();
dialog.setCompletionBtn();
dialog.setProjectBtns();

dialog.setNewProjectBtn(projectManager);
ui.resetPage(currentProject);
function curentView(){
    let currentView;
    const setCurrentView = () =>{

    }
}