import mongoose from "mongoose";

import { IUser } from "../Interfaces/IUser";

const userScheme = new mongoose.Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  stores: {
    type: [],
    required: false,
  },
});

export const User = mongoose.model("User", userScheme);
