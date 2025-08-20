export function ProjectpageUI(){
    const createProductPage = (project) =>{

    }
    const addTask = (description) => {
        const taskList = document.querySelector(".task-list");
        const task = document.createElement("div");
        task.classList.add("task");

        const taskLeft = document.createElement("div");
        taskLeft.classList.add("task-text");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "finish";

        const taskTitle = document.createElement("p");
        taskTitle.textContent = description;
        
        taskLeft.append(checkbox, taskTitle);

        const buttonContainer = document.createElement("div");
        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.textContent = "edit button";
        const delBtn = document.createElement("button");
        delBtn.classList.add("del-btn");
        delBtn.textContent = "delete button";

        buttonContainer.append(editBtn, delBtn);

        task.append(taskLeft, buttonContainer);
        taskList.append(task);
    }
    const updateProjectTitle = (newTitle) =>{
        const title = document.querySelector(".title");
        title.textContent = newTitle;

    }
    const updateProjectDescription = (description) =>{
        const about = document.querySelector(".description p");
        about.textContent = description;
    }
    return {addTask,createProductPage,updateProjectTitle, updateProjectDescription};
}