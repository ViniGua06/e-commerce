export interface IProduct extends Document {
  code: string;
  name: string;
  price: number;
  quantity: number;
  rating: number[];
  tags: string[];
  store: string;
  image: string;
}
