export const task = (title) => {
  let completion = false;
  let job = title;
  let id;

  const editTask = (newJob) => {
    job = newJob;
  };
  const getJob = () => {
    return job;
  };
  const setJob = (newJob) =>{
    job = newJob;
  }
  const getID = () => {
    return id;
  };
  const setID = (num) => {
    id = num;
  };
  const setCompletion = (newValue) =>{
    completion = newValue;
  }
  const getCompletion = () =>{
    return completion
  }
  return { editTask, getJob, setJob, getID, setID, getCompletion, setCompletion};
};
