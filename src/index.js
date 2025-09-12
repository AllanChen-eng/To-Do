import "./styles.css";
import { task } from "./task.js";
import { Project } from "./project.js";
import { ProjectpageUI } from "./UIHandler.js";
import { setDialog } from "./UserDialogs.js";
import { ProjectManager } from "./ProjectManager.js";

const ui = ProjectpageUI();
const storage = localStorage.getItem("profile");
let projectArray;
if (!storage) {
  let currentProject = new Project(
    "My First Project",
    "My first project Description"
  );
  let today = new Project("Today", "");
  projectArray = [today, currentProject];
} else {
  projectArray = JSON.parse(storage).map((data) => {
    let taskmanager = data.taskManager.map(job=> task(job.job,job.completion,job.id))
    return new Project(
      data.title,
      data.description,
      data.dueDate,
      data.priority,
      taskmanager
    );
  });
}
const projectManager = new ProjectManager(projectArray);
projectManager.initalize();
window.addEventListener("beforeunload", () => {
  localStorage.setItem(
    "profile",
    JSON.stringify(projectManager.getProjectList())
  );
});
