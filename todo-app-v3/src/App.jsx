import { useEffect, useState } from "react";
import ToDoItem from "./components/ToDoItem";

function App() {
    const [inputValue, setInputValue] = useState("");
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : []
    });
    const [editText, setEditText] = useState("");
    const [editId, setEditId] = useState(null);

    const isInputValueEmpty = inputValue.trim() === "";

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks])

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
            prev.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed } : task)
        )
    }

    function editTask(task) {
        setEditId(task.id);
        setEditText(task.text);
    }

    function saveEditTask(id) {
        const trimmedTask = editText.trim();
        if (trimmedTask === "") return;

        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, text: trimmedTask }
                    : task
            )
        )
        setEditId(null);
        setEditText("");
    }

    return (
        <div className="app-container">
            <h1>ToDo-List</h1>
            <div className="top-row">
                <input type="text" placeholder="Enter a Task ... " value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button onClick={addTask}
                    disabled={isInputValueEmpty}
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
                        onEdit={editTask}
                        onSaveEdit={saveEditTask}
                        editId={editId}
                        editText={editText}
                        setEditText={setEditText} />
                ))}
            </div>
        </div>
    )
}

export default App;