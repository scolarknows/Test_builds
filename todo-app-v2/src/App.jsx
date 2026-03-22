import { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);


  function addTask() {

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    }
    setTasks(prev => [...prev, newTask]);
    setInputValue("");
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(task => task.id !== id))
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    )

  }

  return (
    <div className='app-container'>
      <div className='top-row'>
        <h1>TO-DO List</h1>
        <input type='text' placeholder='Enter a Task ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={addTask}>Add</button>
      </div>
      <div>
        {tasks.map((task) => (
          <div key={task.id} className='todo-item'>
            <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</p>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => toggleTask(task.id)}>Toggle</button>
          </div>
        ))}
      </div>
    </div>
  )
};

export default App;