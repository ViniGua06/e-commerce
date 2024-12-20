import { NextFunction, Request, Response } from "express";
import { IStore } from "../Interfaces/IStore";
import { StoreRepository } from "../Repositories/store.repository";

const storeRepository = new StoreRepository();

export class StoreController {
  getAllStores = async (req: Request, res: Response) => {
    const stores = await storeRepository.getAllStores();

    res.status(200).json(stores);
  };

  deleteAll = async (req: Request, res: Response) => {
    await storeRepository.deleteAllStores();

    res.status(200).json({ message: "Todas as lojas deletadas!" });
  };

  getStorById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { store_id } = req.params;
      const store = await storeRepository.getStoreById(store_id);

      res.status(200).json(store);
    } catch (error) {
      next(error);
    }
  };

  getStoresByUserId = async (req: Request, res: Response) => {
    const { user_id } = req.params;
    const stores = await storeRepository.getStoresByUserId(user_id);

    res.status(200).json(stores);
  };

  createStore = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const store: IStore = req.body;

      const newStore = await storeRepository.insertStore(store);

      res.status(201).json({ message: "Loja criada!", product: newStore });
    } catch (error) {
      next(error);
    }
  };
}
