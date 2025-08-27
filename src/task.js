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
  return { editTask, getJob, getID, setID, getCompletion, setCompletion};
};
