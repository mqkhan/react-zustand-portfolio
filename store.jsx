import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "light",
  userPrefferences: {
    fontSize: "medium",
  },
  toggleTheme: () =>
    set((state) => ({ theme: state.theme === "light" ? "dark" : "light" })),
  setFontSize: (fontSize) =>
    set((state) => ({
      userPrefferences: { ...state.userPrefferences, fontSize },
    })),
}));

export default useThemeStore;
