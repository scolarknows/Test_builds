import { useState } from "react"


function App() {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);


  function handleAdd() {
    const trimmedTask = inputValue.trim();

    if (!trimmedTask) return;

    setTask([...task, trimmedTask]);
    setInputValue("");
  }

  function handleDelete() {

  }

  function toggleTask() {

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
        {task.map((task, index) => (
          <div className="todo-item" key={index}>
            <p>{task}</p>
            <button>Delete</button>
            <button>Toggle</button>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
