import mongoose from "mongoose";
import { IStore } from "../Interfaces/IStore";

import { v4 } from "uuid";

const storeScheme = new mongoose.Schema<IStore>({
  code: {
    type: String,
    default: v4,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },

  image: {
    type: String,
  },

  user_id: {
    type: String,
  },
});

export const Store = mongoose.model<IStore>("Store", storeScheme);
