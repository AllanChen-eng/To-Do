import { setDialog } from "./UserDialogs";

export function ProjectpageUI() {
  const content = document.querySelector("#content");
  const setCurrentPage = (project) => {
    deletePage();
    createProjectPage(project);
  };
  const showTodayPage = (project,dialog) => {
    deletePage();

    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("div");
    header.classList.add("header");

    const headerLeft = document.createElement("div");
    headerLeft.classList.add("header-left");

    const projectTitle = document.createElement("h1");
    projectTitle.classList.add("title");
    projectTitle.textContent = project.getTitle();

    headerLeft.append(projectTitle);

    header.append(headerLeft);

    const description = document.createElement("div");
    description.classList.add("description");

    const descriptionText = document.createElement("p");

    description.append(descriptionText);

    const taskList = document.createElement("div");
    taskList.classList.add("task-list");

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.textContent = "Add task";

    cardFooter.append(addTaskBtn);

    card.append(header, description, taskList, cardFooter);
    content.append(card);

    populateTaskList(project);
    dialog.setAddTaskBtn();
  };

  const createProjectPage = (project) => {
    const dialog = setDialog(project);

    const card = document.createElement("div");
    card.classList.add("card");

    const header = document.createElement("div");
    header.classList.add("header");

    const headerLeft = document.createElement("div");
    headerLeft.classList.add("header-left");

    const projectCheckbox = document.createElement("input");
    projectCheckbox.type = "checkbox";
    projectCheckbox.id = "finish";

    const projectTitle = document.createElement("h1");
    projectTitle.classList.add("title");
    projectTitle.textContent = project.getTitle();

    headerLeft.append(projectCheckbox, projectTitle);

    const headerRight = document.createElement("div");
    headerRight.classList.add("header-right");

    const priorityLabel = document.createElement("label");
    priorityLabel.htmlFor = "priority";
    priorityLabel.textContent = "Priority:";

    const prioritySelect = document.createElement("select");
    prioritySelect.id = "project-priority";
    prioritySelect.name = "priority";

    const optionHigh = document.createElement("option");
    optionHigh.value = "high";
    optionHigh.textContent = "High";

    const optionMedium = document.createElement("option");
    optionMedium.value = "medium";
    optionMedium.textContent = "Medium";

    const optionLow = document.createElement("option");
    optionLow.value = "low";
    optionLow.textContent = "Low";
    switch (project.getPriority()) {
      case "high":
        optionHigh.selected = true;
        break;
      case "medium":
        optionMedium.selected = true;
        break;
      case "low":
        optionLow.selected = true;
        break;
    }

    prioritySelect.append(optionHigh, optionMedium, optionLow);

    const editProjectBtn = document.createElement("button");
    editProjectBtn.classList.add("edit-project-btn");
    editProjectBtn.textContent = "Edit Project";

    headerRight.append(priorityLabel, prioritySelect, editProjectBtn);

    header.append(headerLeft, headerRight);

    const description = document.createElement("div");
    description.classList.add("description");

    const descriptionText = document.createElement("p");
    descriptionText.textContent = project.getDescription();

    description.append(descriptionText);

    const taskList = document.createElement("div");
    taskList.classList.add("task-list");

    const cardFooter = document.createElement("div");
    cardFooter.classList.add("card-footer");

    const addTaskBtn = document.createElement("button");
    addTaskBtn.classList.add("add-task-btn");
    addTaskBtn.textContent = "Add task";

    const markFinishBtn = document.createElement("button");
    markFinishBtn.classList.add("mark-project-finish-btn");
    markFinishBtn.textContent = "Mark finished";

    cardFooter.append(addTaskBtn, markFinishBtn);

    card.append(header, description, taskList, cardFooter);
    content.append(card);

    populateTaskList(project);
    dialog.setProjectBtns();
  };
  const populateTaskList = (project) => {
    const list = project.getAllTasks();
    list.forEach((task) => {
      addTask(task, project);
    });
  };
  const addTask = (projectTask, project) => {
    const taskList = document.querySelector(".task-list");
    const task = document.createElement("div");
    task.classList.add("task");
    task.dataset.id = projectTask.getID();

    const taskLeft = document.createElement("div");
    taskLeft.classList.add("task-text");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "finish";
    if (projectTask.getCompletion()) checkbox.checked = true;
    checkbox.dataset.id = projectTask.getID();
    checkbox.addEventListener("change", () => {
      var index = checkbox.dataset.id;
      if (checkbox.checked) {
        projectTask.setCompletion(true);
      } else {
        projectTask.setCompletion(false);
      }
    });

    const taskTitle = document.createElement("p");
    taskTitle.textContent = projectTask.getJob();

    taskLeft.append(checkbox, taskTitle);

    const buttonContainer = document.createElement("div");
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.textContent = "edit button";
    editBtn.dataset.id = projectTask.getID();
    editBtn.addEventListener("click", (e) => {
      const dialog = document.querySelector("#edit-task-dialog");
      const taskInput = document.querySelector("#edit-task");
      project.setCurrentTask(projectTask);
      taskInput.value = projectTask.getJob();
      dialog.showModal();
    });
    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn");
    delBtn.textContent = "delete button";
    delBtn.dataset.id = projectTask.getID();
    delBtn.addEventListener("click", (e) => {
      const index = e.currentTarget.dataset.id;
      console.log("target:" + e.currentTarget.dataset.id);
      const content = document.querySelector(`.task[data-id="${index}"]`);
      project.removeTask(index);
      content.remove();
    });

    buttonContainer.append(editBtn, delBtn);

    task.append(taskLeft, buttonContainer);
    taskList.append(task);
  };
  const setProjectTitle = (newTitle) => {
    const title = document.querySelector(".title");
    title.textContent = newTitle;
  };
  const updateProjectDescription = (description) => {
    const about = document.querySelector(".description p");
    about.textContent = description;
  };
  const deletePage = () => {
    content.innerHTML = "";
  };

  const addProjectToTaskbar = (project, dialog) => {
    const element = document.createElement("li");
    element.textContent = project.getTitle();
    element.addEventListener("click", () => {
      setCurrentPage(project);
      dialog.setCurrentProject(project);
    });
    document.querySelector(".project-list").append(element);
  };
  const populateProjectTaskbar = (projectList,dialog) =>{
    projectList.forEach((project) => {
      if(project.getTitle() != "Today"){
      addProjectToTaskbar(project,dialog)
      }
    })
  }
  const clearProjectTaskbar = () => {
        document.querySelector(".project-list").innerHTML = "";
  }
  const setTodayProjectEventListener = (manager) => {
    const today = document.querySelector(".today h3");
    today.addEventListener("click", () => {
      manager.selectTodayPage();
    });
  };
  return {
    showTodayPage,
    setCurrentPage,
    addTask,
    createProjectPage,
    populateTaskList,
    setProjectTitle,
    updateProjectDescription,
    deletePage,
    addProjectToTaskbar,
    setTodayProjectEventListener,
    populateProjectTaskbar,
    clearProjectTaskbar
  };
}
