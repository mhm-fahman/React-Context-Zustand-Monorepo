import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";
import ThemeToggle from "./components/ThemeToggle";
import TodoList from "./components/TodoList";

function Content() {
  const { theme } = useTheme();
  return (
    <div
      style={{
        padding: 20,
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <h1>Context API Todo App</h1>
      <ThemeToggle />
      <TodoList />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Content />
      </TodoProvider>
    </ThemeProvider>
  );
}
