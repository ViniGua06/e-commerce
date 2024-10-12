import mongoose from "mongoose";
import { IStore } from "../Interfaces/IStore";
import { Store } from "../Models/Store";
import { BadRequestError } from "../Errors/BadRequest.error";

export class StoreRepository {
  getAllStores = async () => {
    const stores = await Store.find();

    return stores;
  };

  deleteAllStores = async () => {
    await Store.deleteMany().exec();
  };

  getStoreById = async (store_id: string) => {
    if (!store_id) throw new BadRequestError("ID faltando");
    const store = await Store.findOne({ _id: store_id });
    return store;
  };

  getStoresByUserId = async (user_id: string) => {
    const stores = await Store.find({ user_id: user_id });

    return stores;
  };

  insertStore = async (store: Partial<IStore>) => {
    try {
      const newStore = new Store({
        name: store.name,
        desc: store.desc,
        image: store.image,
        user_id: store.user_id,
      });

      return await newStore.save();
    } catch (error) {
      throw error;
    }
  };
}
