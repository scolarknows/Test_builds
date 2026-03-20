import { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);

  function handleAdd() {
    const trimmedTask = inputValue.trim();
    if (!trimmedTask) return;

    const newTask = {
      id: Date.now(),
      text: trimmedTask,
      done: false
    }

    setTask(prev => [...prev, newTask]);
    setInputValue("");
  }

  function handleDelete(id) {
    setTask((prev) => prev.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTask((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task)
    );
  }

  return (
    <>
      <h1>TO-DO App</h1>

      <section className="header">
        <input
          type="text"
          placeholder="Enter a Task ..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </section>

      <div>
        {task.map((task) => (
          <div className="todo-item" key={task.id}>
            <p style={{ textDecoration: task.done ? "line-through" : "none" }}>{task.text}</p>

            <button onClick={() => handleDelete(task.id)}>Delete</button>

            <button onClick={() => toggleTask(task.id)}>{task.done ? "Undo" : "Toggle"}</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
