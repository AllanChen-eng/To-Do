import { ProjectpageUI } from "./UIHandler.js";
const ui = ProjectpageUI();
export class ProjectManager {
  constructor() {
    this.projectList = [];
  }
  getProject(projectTitle) {
        return this.projectList.find((project) => project.getTitle() == projectTitle);
  }
  getProjectList() {
    return this.projectList;
  }
  addProject(project) {
    this.projectList.push(project);
    ui.addProjectToTaskbar(project);
  }
  removeProject(projectTitle) {
    const index = this.projectList.findIndex(
      (project) => project.getTitle() == projectTitle
    );
    if (index != -1) {
      this.taskManager.splice(index, 1);
    }
  }
}
