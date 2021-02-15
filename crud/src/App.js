import React, {useState} from 'react';
import {isEmpty} from 'lodash';
import shortid from 'shortid';
function App() {
  
  const [taskName, setTaskName] = useState("");//set the task name
  const [listTask, setListTask] = useState([]);//set the list tasks
  const [editMode, setEditMode] = useState(false);// mode of operation, edit or add tasks
  const [id, setId] = useState("")//set the id task
  //a function to save the changes in a task
  const saveTask = (e)=>{
    e.preventDefault();
    if(isEmpty(taskName)){
      return;
    }
    const editedTask = listTask.map((item)=>item.id === id ? {id,name:taskName} : item);
    setListTask(editedTask);
    setTaskName("");
    setEditMode(false);
    setId("");
  }
  //a function to save the new tasks
  const addTask = (e)=>{
    e.preventDefault();
    if(isEmpty(taskName)){
      return;
    }
    const newTask = {
      id: shortid.generate(),
      name: taskName
    }
    setListTask([...listTask, newTask]);
    setTaskName("");
  }
  //a function to delete a task
  const deleteTask = (id)=>{
    const filterTask = listTask.filter((task)=>{
      return task.id !== id
    })
    setListTask(filterTask);
  }
  //a function to set variables necessary for edit a tasks
  const updateTask = (task)=>{
    setTaskName(task.name);
    setEditMode(true);
    setId(task.id);
  }
  return (
    <div className="container mt-5 ">
      <h1>Tasks</h1>
      <hr/>
      <div className="row">
        <div className="col-8 ">
          <h4 className="text-center">Task list</h4>
          {
            listTask.length === 0 ?
            (
              <h5 className="text-center">No hay tareas programadas</h5>
            )  : 
            (
              <ul className="list-group">
              {
                listTask.map((task)=>(
                  <li className="list-group-item" key={task.id}>
                  <span className="lead">{task.name}</span>
                  <button 
                    className="btn btn-danger btn-sm float-right mx-2"
                    onClick={()=> deleteTask(task.id)}
                  >Delete</button>
                  <button 
                    className="btn btn-primary btn-sm float-right"
                    onClick={()=>updateTask(task)}
                  >Edit</button>
                  </li>
                ))
              }
              </ul>
            )
          }
        </div>
        <div className="col-4 ">
          <h4 className="text-center">{ editMode ? "Edit " : "Add "}Task</h4>
          <form onSubmit={ editMode ? saveTask : addTask}>
            <input 
              type="text" 
              className="form-control mb-2" 
              placeholder={ editMode ? "" : "Add Task ..."}
              onChange={(text)=>setTaskName(text.target.value)}
              value={taskName}
            ></input>
            <button 
              type="submit" 
              className={ editMode ? "btn btn-dark btn-block " : "btn btn-success btn-block "}

            >{ editMode ? "Save " : "Add "}Task</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
