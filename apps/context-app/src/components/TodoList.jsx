import { useTodos } from "../context/TodoContext";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const { todos, toggleTodo, removeTodo, addTodo } = useTodos();

  const handleAdd = () => {
    const text = prompt("Enter todo:");
    if (text) addTodo(text);
  };

  return (
    <div>
      <button onClick={handleAdd}>Add Todo</button>
      <ul>
        {todos.map((t) => (
          <TodoItem
            key={t.id}
            todo={t}
            onToggle={toggleTodo}
            onRemove={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
}
