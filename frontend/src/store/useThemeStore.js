import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "coffee",
  setTheme: (theme) => set({ theme }),
}));
