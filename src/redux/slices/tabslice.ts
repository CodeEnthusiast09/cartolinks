import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeTab: typeof window !== "undefined" ? window.location.pathname : "Home",
};

export const tabSlice = createSlice({
  name: "tab",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    resetTabFromPath: (state, action) => {
      const path =
        action.payload ||
        (typeof window !== "undefined" ? window.location.pathname : "/");
      state.activeTab = path;
    },
  },
});

export const { setActiveTab, resetTabFromPath } = tabSlice.actions;

export default tabSlice.reducer;
