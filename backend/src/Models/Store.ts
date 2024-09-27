import mongoose from "mongoose";
import { IStore } from "../Interfaces/IStore";

const storeScheme = new mongoose.Schema<IStore>({
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
