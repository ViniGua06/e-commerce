import mongoose from "mongoose";

import { IProduct } from "../Interfaces/IProduct";

const productScheme = new mongoose.Schema<IProduct>({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  rating: {
    type: [Number],
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

export const Product = mongoose.model<IProduct>("Product", productScheme);
