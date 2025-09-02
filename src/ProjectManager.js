import { ProjectpageUI } from "./UIHandler.js";
import { setDialog } from "./UserDialogs.js";

const ui = ProjectpageUI();
export class ProjectManager {
  constructor(firstProject) {
    this.projectList = [firstProject];
    this.dialog = setDialog(firstProject);
    this.dialog.setAddTaskDialog();
    this.dialog.setEditTaskDialog();
    this.dialog.setEditProjectDialog();
    this.dialog.setPriorityOptions();
    this.dialog.setCompletionBtn();
    this.dialog.setProjectBtns();
    this.dialog.setAddNewProjectBtn(this);
  }
  getProject(projectTitle) {
    return this.projectList.find(
      (project) => project.getTitle() == projectTitle
    );
  }
  getProjectList() {
    return this.projectList;
  }
  addProject(project) {
    this.projectList.push(project);
    ui.addProjectToTaskbar(project,this.dialog);
    this.dialog.setCurrentProject(project);
    ui.setCurrentPage(project);
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
