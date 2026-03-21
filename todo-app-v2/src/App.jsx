import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    setTasks(prev => [...prev, inputValue]);
    setInputValue("");
  }

  function deleteTask() {

  }

  function toggleTask() {

  }



  return (
    <div className='app-container'>
      <div className='top-row'>
        <h1>TO-DO List</h1>
        <input type='text' placeholder='Enter a Task ...' value={inputValue} />
        <button>Add</button>
      </div>
      <div className='todo-item'>
        <p>Dynamic Text Object or Task</p>
        <button>Delete</button>
        <button>Toggle</button>
      </div>
    </div>
  )
};

export default App;