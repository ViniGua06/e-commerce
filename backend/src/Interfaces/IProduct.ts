import { ObjectId } from "mongodb";

export interface IProduct extends Document {
  _id: ObjectId;
  name: string;
  price: number;
  quantity: number;
  rating: number[];
  tags: string[];
  store: string;
  image: string;
}
