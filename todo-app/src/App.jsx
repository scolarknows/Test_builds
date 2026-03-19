import { useState } from "react"
function handleAdd() {

}

function handleDelete() {

}

function toggleTask() {

}

function App() {

  const [task, setTask] = useState("");

  return (
    <>
      <h1>TO-DO App</h1>
      <section>
        <input type="text" placeholder="Enter a Task ..." />
        <button>Add</button>
      </section>
      <section>
        <p>dynamic object</p>
        <button>Delete</button>
        <button>Toggle</button>
      </section>
    </>
  )
}

export default App
