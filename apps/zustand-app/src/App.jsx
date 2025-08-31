import { useThemeStore } from "./store/useThemeStore";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="p-5">
      <div className="relative flex items-center justify-center py-4">
        <h1 className="text-2xl font-bold text-center">Context API Todo App</h1>
        <div className="absolute right-0">
          <ThemeToggle />
        </div>
      </div>
      <TodoList />
    </div>
  );
}
