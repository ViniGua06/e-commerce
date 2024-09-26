import { Router } from "express";
import { StoreController } from "../Controllers/store.controller";

export const storeRouter = Router();

const storeController = new StoreController();

storeRouter.get("/store/all", storeController.getAllStores);
storeRouter.get("/store/:user_id", storeController.getStoresByUserId);
storeRouter.post("/store/create", storeController.createStore);
