import { ProjectpageUI } from "./UIHandler.js";
import { setDialog } from "./UserDialogs.js";

const ui = ProjectpageUI();
export class ProjectManager {
  constructor(projectArray) {
    this.projectList = projectArray
    this.dialog = setDialog(projectArray[1]);
    this.dialog.setAddTaskDialog();
    this.dialog.setEditTaskDialog();
    this.dialog.setEditProjectDialog();
    this.dialog.setPriorityOptions();
    this.dialog.setCompletionBtn();
    this.dialog.setProjectBtns();
    this.dialog.setAddNewProjectBtn(this);
    this.dialog.deleteProjectBtnDialog(this);
    ui.setTodayProjectEventListener(this);
    this.today = projectArray[0];
  }
  initalize() {
    ui.populateProjectTaskbar(this.projectList,this.dialog);
    this.selectTodayPage();
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
