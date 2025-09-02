import "./styles.css";
import { task } from "./task.js";
import { Project } from "./project.js";
import { ProjectpageUI } from "./UIHandler.js";
import { setDialog } from "./UserDialogs.js";
import { ProjectManager } from "./ProjectManager.js";

const ui = ProjectpageUI();
let currentProject = new Project();
let projectManager = new ProjectManager(currentProject);

function curentView(){
    let currentView;
    const setCurrentView = () =>{

    }
}