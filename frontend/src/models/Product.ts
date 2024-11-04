export interface IProduct {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  rating: number[];
  tags: string[];
  store: string;
  image: string;
  desc: string;
  demand?: number;
}
