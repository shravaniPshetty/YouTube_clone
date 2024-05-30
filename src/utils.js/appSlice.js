import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    searchSuggest:{},
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    setSearchCache: (state, action) => {
      state.searchSuggest = Object.assign(state.searchSuggest, action.payload);
    },
  },
});

export const { toggleMenu, closeMenu, setSearchCache } = appSlice.actions;
export default appSlice.reducer;