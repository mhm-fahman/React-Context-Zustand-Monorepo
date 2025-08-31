import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useThemeStore = create(
  devtools((set) => ({
    theme: "light",
    toggleTheme: () =>
      set(
        (state) => ({
          theme: state.theme === "light" ? "dark" : "light",
        }),
        false,
        "toggleTheme"
      ),
  }))
);

useThemeStore.subscribe((state) => {
  document.body.style.background = state.theme === "light" ? "#fff" : "#333";
  document.body.style.color = state.theme === "light" ? "#000" : "#fff";
});
