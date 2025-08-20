export const task = (title) => {
  let checkbox = false;
  let job = title;
  let id;
  const changeCheckbox = () => {
    if (checkbox == false) checkbox == true;
    else checkbox == false;
  };
  const editTask = (newJob) => {
    job = newJob;
  };
  const getJob = () => {
    return job;
  };
  const getID = () => {
    return id;
  };
  const setID = (num) => {
    id = num;
  };
  return { editTask, changeCheckbox, getJob, getID, setID};
};
