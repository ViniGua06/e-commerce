import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
  user_id: "",
  user: "",
  email: "",
  password: "",
  stores: [],
  logged: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      return {
        ...state,
        user_id: payload.user_id,
        user: payload.user,
        email: payload.email,
        password: payload.password,
        stores: payload.stores,
        logged: true,
      };
    },

    logout: (state) => {
      return initialState;
    },
  },
});

export const { setUser, logout } = userSlice.actions;

export const userSelector = (state: RootState) => state.user;
