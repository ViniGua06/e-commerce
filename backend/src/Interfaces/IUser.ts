import { IStore } from "./IStore";

export interface IUser {
  name: string;
  email: string;
  password: string;
  stores: IStore[];
}
