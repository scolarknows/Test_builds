import { useState } from "react";
import ToDoItem from "./components/ToDoItem";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState([]);

    const trimmedInput = inputValue.trim();

    function addTask() {
        const newTask = {
            id: Date.now(),
            text: inputValue,
            completed: false

        }
        if (trimmedInput === "") return;

        setTasks(prev => [...prev, newTask]);
        setInputValue("");
    }

    function deleteTask(id) {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    function toggleTask(id) {
        setTasks(prev =>
            prev.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed } : task)
        )
    }


    return (
        <div className="app-container">
            <h1>ToDo-List</h1>
            <div className="top-row">
                <input type="text" placeholder="Enter a Task ... " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={addTask}>Add</button>
            </div>
            <div>
                {tasks.map((task) => (
                    <ToDoItem
                        key={task.id}
                        task={task}
                        onDelete={deleteTask}
                        onToggle={toggleTask} />
                ))}
            </div>
        </div>
    )
}

export default App;