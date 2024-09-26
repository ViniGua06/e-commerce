import { IStore } from "../Interfaces/IStore";
import { Store } from "../Models/Store";

export class StoreRepository {
  getAllStores = async () => {
    const stores = await Store.find();

    return stores;
  };

  getStoresByUserId = async (user_id: string) => {
    const stores = await Store.find({ user_id: user_id });

    return stores;
  };

  insertStore = async (store: Partial<IStore>) => {
    const newStore = new Store({
      name: store.name,
      desc: store.desc,
      image: store.image,
      user_id: store.user_id,
    });

    return await newStore.save();
  };
}
