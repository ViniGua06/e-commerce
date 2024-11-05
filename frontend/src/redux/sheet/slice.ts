import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const slice = createSlice({
  initialState: {
    active: false,
  },
  name: "sheet",
  reducers: {
    activeSheet(state) {
      return {
        ...state,
        active: true,
      };
    },

    desactiveSheet(state) {
      return {
        ...state,
        active: false,
      };
    },
  },
});

export const { activeSheet, desactiveSheet } = slice.actions;
export const sheetSelector = (state: RootState) => state.sheet;
export const sheetReducer = slice.reducer;
