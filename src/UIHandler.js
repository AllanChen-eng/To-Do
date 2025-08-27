export function ProjectpageUI() {
  const createProductPage = (project) => {};
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
    checkbox.dataset.id = projectTask.getID();
    checkbox.addEventListener("change", () => {
      var index = checkbox.dataset.id;
      if (checkbox.checked) {
        project.setTaskCompletion(index, true);
      } else {
        project.setTaskCompletion(index, false);
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
      console.log("project job:" + projectTask.getJob());
      taskInput.value = projectTask.getJob();
      dialog.showModal();
    });
    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn");
    delBtn.textContent = "delete button";
    delBtn.dataset.id = projectTask.getID();
    delBtn.addEventListener("click", (e) => {
      const index = e.target.dataset.id;
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
  return {
    addTask,
    createProductPage,
    setProjectTitle,
    updateProjectDescription,
  };
}
