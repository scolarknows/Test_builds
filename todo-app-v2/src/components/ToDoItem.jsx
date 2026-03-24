function ToDoItem({ task, onDelete, onToggle, onEdit, editId, editText, onSaveEdit, setEditText }) {
    return (
        <div key={task.id} className='todo-item'>
            {editId === task.id ? (
                <>
                    <input
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                    />
                    <button onClick={() => onSaveEdit(task.id)}>Save</button>
                </>
            ) : (
                <>
                    <p style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</p>
                    <button onClick={() => onEdit(task)}>Edit</button>
                </>
            )}

            <button onClick={() => onDelete(task.id)}>Delete</button>
            <button onClick={() => onToggle(task.id)}>Toggle</button>
        </div>
    )
}

export default ToDoItem;