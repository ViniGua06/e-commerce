"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storeRouter = void 0;
const express_1 = require("express");
const store_controller_1 = require("../Controllers/store.controller");
exports.storeRouter = (0, express_1.Router)();
const storeController = new store_controller_1.StoreController();
exports.storeRouter.get("/store/all", storeController.getAllStores);
exports.storeRouter.post("/store/create", storeController.createStore);
