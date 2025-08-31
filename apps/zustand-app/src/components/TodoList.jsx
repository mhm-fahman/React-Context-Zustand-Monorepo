import { useTodoStore } from "../store/useTodoStore";
import { useState } from "react";
import { Button } from "@repo/ui";
import TodoItem from "./TodoItem";
import { useThemeStore } from "../store/useThemeStore";

export default function TodoList() {
  const { todos, toggleTodo, removeTodo, addTodo } = useTodoStore();
  const [newTodo, setNewTodo] = useState("");
  const { theme } = useThemeStore();

  const handleAdd = () => {
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Enter todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`p-2 border border-gray-300 rounded w-80 ${
            theme === "dark" ? "bg-gray-700 text-white" : "bg-white"
          }`}
        />
        <Button onClick={handleAdd}>Add Todo</Button>
      </div>

      <ul className="grid grid-cols-2 gap-4 w-full max-w-4xl">
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
