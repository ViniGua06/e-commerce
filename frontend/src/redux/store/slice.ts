import { createSlice } from "@reduxjs/toolkit";
import { IStore } from "../../models/Store";
import { RootState } from "../store";

const initialState: IStore = {
  _id: "",
  name: "",
  desc: "",
  image: "",
};

const slice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStore: (state, { payload }) => {
      return {
        ...state,
        _id: payload._id,
        name: payload.name,
        desc: payload.desc,
        image: payload.desc,
      };
    },

    clearStore: () => {
      return initialState;
    },
  },
});

export const { setStore, clearStore } = slice.actions;

export const storeReducer = slice.reducer;

export const storeSelector = (props: RootState) => props.store;
