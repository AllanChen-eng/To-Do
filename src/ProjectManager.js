import { ProjectpageUI } from "./UIHandler.js";
import { setDialog } from "./UserDialogs.js";

const ui = ProjectpageUI();
export class ProjectManager {
  constructor(firstProject, today) {
    this.projectList = [firstProject];
    this.dialog = setDialog(firstProject);
    this.dialog.setAddTaskDialog();
    this.dialog.setEditTaskDialog();
    this.dialog.setEditProjectDialog();
    this.dialog.setPriorityOptions();
    this.dialog.setCompletionBtn();
    this.dialog.setProjectBtns();
    this.dialog.setAddNewProjectBtn(this);
    this.dialog.deleteProjectBtnDialog(this);
    ui.setTodayProjectEventListener(this);
    this.today = today;
  }
  initalize() {
    const project = this.projectList[0];
    ui.addProjectToTaskbar(project, this.dialog);
    this.dialog.setCurrentProject(project);
    ui.setCurrentPage(project);
  }
  getTodayProject(){
    return this.today;
  }
  selectTodayPage() {
    this.dialog.setCurrentProject(this.today);
    ui.showTodayPage(this.today, this.dialog);
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
    ui.addProjectToTaskbar(project, this.dialog);
    this.dialog.setCurrentProject(project);
    ui.setCurrentPage(project);
  }
  removeProject(projectTitle) {
    const index = this.projectList.findIndex(
      (project) => project.getTitle() == projectTitle
    );
    if (index != -1) {
      this.projectList.splice(index, 1);
    }
    this.selectTodayPage();
    this.updateTaskbar();
  }
  updateTaskbar() {
    ui.clearProjectTaskbar();
    ui.populateProjectTaskbar(this.getProjectList(), this.dialog);
  }
}
