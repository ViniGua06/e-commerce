"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreController = void 0;
const store_repository_1 = require("../Repositories/store.repository");
const storeRepository = new store_repository_1.StoreRepository();
class StoreController {
    constructor() {
        this.getAllStores = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const stores = yield storeRepository.getAllStores();
            res.json(200).json(stores);
        });
        this.getStoresByUserId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { user_id } = req.params;
            const stores = yield storeRepository.getStoresByUserId(user_id);
            res.status(200).json(stores);
        });
        this.createStore = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const store = req.body;
                const newStore = yield storeRepository.insertStore(store);
                res.status(201).json({ message: "Loja criada!", product: newStore });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.StoreController = StoreController;
