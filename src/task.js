
export const task = (title) =>{
    let checkbox = false;
    let job = title;
    const changeCheckbox = () =>{
        if(checkbox ==false) checkbox ==true;
        else checkbox == false;
    }
    const editTask = (newJob) => {
        job = newJob;
    }
    const getJob = () =>{
        return job;
    }
    return{ editTask, changeCheckbox, getJob};
}