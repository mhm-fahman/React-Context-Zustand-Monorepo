import { useTheme } from "../context/ThemeContext";
import { Button } from "@repo/ui";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"}
    </Button>
  );
}
