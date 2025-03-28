import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: localStorage.getItem("theme") || "light", // Récupérer le thème enregistré
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.theme); // Sauvegarder dans localStorage
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;