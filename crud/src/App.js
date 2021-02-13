import logo from './logo.svg';
import React, {useState} from 'react';
function App() {
  const [state, setstate] = useState(null);
  const addTask = ()=>{
    if(star)
  }
  return (
    <div className="container mt-5 ">
      <h1>Tasks</h1>
      <hr/>
      <div className="row">
        <div className="col-8 ">
          <h4 className="text-center">Task list</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Task name</span>
              <button className="btn btn-danger btn-sm float-right mx-2">Delete</button>
              <button className="btn btn-primary btn-sm float-right">Edit</button>
            </li>
          </ul>
        </div>
        <div className="col-4 ">
          <h4 className="text-center">Form</h4>
          <form onSubmit={addTask}>
            <input type="text" className="form-control mb-2" placeholder="Add task..."
              onChange={(text)=>setTask(text.target.value)}
              value={task}
            ></input>
            <button type="submit" className="btn btn-success btn-block">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
