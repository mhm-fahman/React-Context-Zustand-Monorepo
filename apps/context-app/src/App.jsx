import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { TodoProvider } from "./context/TodoContext";
import Content from "./pages/Content";

export default function App() {
  return (
    <ThemeProvider>
      <TodoProvider>
        <Content />
      </TodoProvider>
    </ThemeProvider>
  );
}
