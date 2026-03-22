import { useEffect, useState } from 'react';
import ToDoItem from './components/ToDoItem';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const isInputEmpty = inputValue.trim() === "";

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
        <input
          type='text'
          placeholder='Enter a Task ...'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button
          onClick={addTask}
          disabled={isInputEmpty}
        >
          Add
        </button>
      </div>

      <div>
        {tasks.map((task) => (
          <ToDoItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </div>
    </div>
  )
};

export default App;