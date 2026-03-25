function ToDoItem({ task, onDelete, onToggle }) {
    return (
        <div key={task.id} className="todo-item">
            <p style={{ textDecoration: task.completed ? "line-through" : "none" }}>{task.text}</p>
            <button>Save or Edit</button>
            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onToggle(task.id)}>Toggle</button>
        </div>
    )
}

export default ToDoItem;