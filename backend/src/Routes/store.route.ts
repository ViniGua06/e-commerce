import { Router } from "express";
import { StoreController } from "../Controllers/store.controller";

export const storeRouter = Router();

const storeController = new StoreController();

storeRouter.get("/store/all", storeController.getAllStores);
storeRouter.get("/store/:store_id", storeController.getStorById);
storeRouter.get("/stores/:user_id", storeController.getStoresByUserId);
storeRouter.post("/store/create", storeController.createStore);
storeRouter.delete("/store/delete/all", storeController.deleteAll);
