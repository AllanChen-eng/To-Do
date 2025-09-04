import "./styles.css";
import { task } from "./task.js";
import { Project } from "./project.js";
import { ProjectpageUI } from "./UIHandler.js";
import { setDialog } from "./UserDialogs.js";
import { ProjectManager } from "./ProjectManager.js";

const ui = ProjectpageUI();
let currentProject = new Project("My First Project", "My first project Description");
let today = new Project("Today");
let projectManager = new ProjectManager(currentProject,today);
projectManager.initalize();

function curentView(){
    let currentView;
    const setCurrentView = () =>{

    }
}