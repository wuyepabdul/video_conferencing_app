import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: localStorage.getItem("videoing-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("videoing-theme", theme);
    set({ theme });
  },
}));

export default useThemeStore;
