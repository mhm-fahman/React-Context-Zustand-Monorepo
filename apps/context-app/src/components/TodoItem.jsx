import { useTheme } from "../context/ThemeContext";

export default function TodoItem({ todo, onToggle, onRemove }) {
  const { theme } = useTheme();
  return (
    <li
      className={`flex items-center justify-between rounded-lg p-4 my-2 shadow-sm ${
        theme === "light" ? "bg-gray-300" : "bg-gray-800"
      }`}
    >
      <div
        onClick={() => onToggle(todo.id)}
        className="flex items-center cursor-pointer flex-1"
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="mr-3 w-4 h-4 text-blue-600 border-gray-300 rounded"
        />
        <span
          className={`text-base transition-colors ${
            todo.completed
              ? "line-through text-gray-400"
              : theme === "light"
              ? "text-gray-800"
              : "text-gray-300"
          }`}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onRemove(todo.id)}
        className="ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 font-bold transition-colors"
        title="Remove"
      >
        ✕
      </button>
    </li>
  );
}
