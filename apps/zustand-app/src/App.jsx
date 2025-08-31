import { useThemeStore } from "./store/useThemeStore";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";

export default function App() {
  const { theme } = useThemeStore();

  return (
    <div
      style={{
        padding: 20,
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Zustand Todo App</h1>
      <ThemeToggle />
      <TodoList />
    </div>
  );
}
