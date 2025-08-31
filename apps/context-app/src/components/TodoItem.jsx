export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li style={{ margin: "5px 0" }}>
      <span
        onClick={() => onToggle(todo.id)}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)} style={{ marginLeft: 10 }}>
        X
      </button>
    </li>
  );
}
