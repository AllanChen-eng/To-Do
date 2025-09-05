import { Project } from "./project";
export function setDialog(project) {
  let currentProject = project;
  const setCurrentProject = (newProject) => {
    currentProject = newProject;
  };
  const setAddNewProjectBtn = (projectManager) => {
    const newProject = document.querySelector(".new-project-btn");
    const dialog = document.getElementById("new-project-dialog");
    const cancelBtn = document.querySelector("#cancel-new-project-dialog");
    const form = document.querySelector(".new-project-form");

    const titleValue = document.querySelector("#new-project-title");
    const descriptionValue = document.querySelector("#new-project-description");

    cancelBtn.addEventListener("click", () => {
      dialog.close();
    });
    newProject.addEventListener("click", () => {
      descriptionValue.value = "My Project Description";
      titleValue.value = "";
      dialog.showModal();
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let title = titleValue.value;
      let description = descriptionValue.value;
      let project = new Project(title, description);
      projectManager.addProject(project);
      dialog.close();
    });
  };
  const setAddTaskBtn = () => {
    const dialog = document.getElementById("task-dialog");
    const newTask = document.querySelector("#addTask");
    const addTaskBtn = document.querySelector(".add-task-btn");
    addTaskBtn.addEventListener("click", () => {
      newTask.value = "";
      dialog.showModal();
    });
  };
  const setAddTaskDialog = () => {
    const dialog = document.getElementById("task-dialog");
    const cancelBtn = document.querySelector("#cancelDialog");
    const form = document.querySelector(".task-form");
    const newTask = document.querySelector("#addTask");

    cancelBtn.addEventListener("click", () => {
      dialog.close();
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      currentProject.addTask(newTask.value);
      dialog.close();
    });
  };
  const setEditTaskDialog = () => {
    const dialog = document.querySelector("#edit-task-dialog");
    const editForm = document.querySelector(".edit-task-form");
    const taskInput = document.querySelector("#edit-task");
    const cancelBtn = document.querySelector("#cancelTaskEditDialog");

    cancelBtn.addEventListener("click", () => {
      dialog.close();
    });
    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      var currentTask = currentProject.getCurrentTask();
      var index = currentTask.getID();
      const p = document.querySelector(`.task[data-id="${index}"] p`);
      if (!p) console.log("didnt find p");
      p.textContent = taskInput.value;
      currentTask.setJob(taskInput.value);
      dialog.close();
    });
  };
  const setEditProjectBtn = () => {
    const changeProjectBtn = document.querySelector(".edit-project-btn");
    const dialogID = document.querySelector("#edit-project-dialog");
    const titleInput = document.querySelector("#change-title");
    const descriptionInput = document.querySelector("#change-description");

    changeProjectBtn.addEventListener("click", () => {
      descriptionInput.value = currentProject.getDescription();
      titleInput.value = currentProject.getTitle();
      dialogID.showModal();
    });
  };
  const setEditProjectDialog = () => {
    const dialogID = document.querySelector("#edit-project-dialog");
    const editForm = document.querySelector(".edit-project-form");
    const titleInput = document.querySelector("#change-title");
    const descriptionInput = document.querySelector("#change-description");
    const cancelBtn = document.querySelector("#cancel-project-edit-dialog");

    cancelBtn.addEventListener("click", () => {
      dialogID.close();
    });

    editForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const newTitle = titleInput.value;
      const description = descriptionInput.value;
      currentProject.changeTitle(newTitle);
      currentProject.changeDescription(description);
      dialogID.close();
    });
  };
  const setPriorityOptions = () => {
    const options = document.querySelector("#project-priority");
    options.addEventListener("change", () => {
      currentProject.changePriority(options.value);
    });
  };
  const setCompletionBtn = () => {
    const complete = document.querySelector(".mark-project-finish-btn");
    complete.addEventListener("click", () => {
      currentProject.swapProjectCompletion();
      console.log(
        "project completion marked: " + currentProject.getCompletion()
      );
    });
  };
  const setProjectBtns = () => {
    //For when the buttons on page get deleted and need event listeners set again
    setAddTaskBtn();
    setEditProjectBtn();
    setPriorityOptions();
    setCompletionBtn();
  };
  const deleteProjectBtnDialog = (projectManager) => {
    const del = document.querySelector(".delete-project-btn");
    const dialogID = document.querySelector("#edit-project-dialog");
    del.addEventListener("click", () => {
      projectManager.removeProject(currentProject.getTitle());
      dialogID.close();
    });
  };
  return {
    deleteProjectBtnDialog,
    setCurrentProject,
    setAddNewProjectBtn,
    setAddTaskDialog,
    setEditTaskDialog,
    setEditProjectDialog,
    setPriorityOptions,
    setEditProjectBtn,
    setAddTaskBtn,
    setCompletionBtn,
    setProjectBtns,
  };
}
