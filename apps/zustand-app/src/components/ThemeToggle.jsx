import { useThemeStore } from "../store/useThemeStore";
import { Button } from "@repo/ui";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Button onClick={toggleTheme}>
      Switch to {theme === "light" ? "dark" : "light"}
    </Button>
  );
}
