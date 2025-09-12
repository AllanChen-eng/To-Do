export const task = (job,completion=false,id) => {

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
  return { job, completion, id,editTask, getJob, setJob, getID, setID, getCompletion, setCompletion};
};
