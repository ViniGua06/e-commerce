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
exports.StoreRepository = void 0;
const Store_1 = require("../Models/Store");
class StoreRepository {
    constructor() {
        this.getAllStores = () => __awaiter(this, void 0, void 0, function* () {
            const stores = yield Store_1.Store.find();
            return stores;
        });
        this.getStoresByUserId = (user_id) => __awaiter(this, void 0, void 0, function* () {
            const stores = yield Store_1.Store.find({ user_id: user_id });
            return stores;
        });
        this.insertStore = (store) => __awaiter(this, void 0, void 0, function* () {
            const newStore = new Store_1.Store({
                name: store.name,
                desc: store.desc,
                image: store.image,
                user_id: store.user_id,
            });
            return yield newStore.save();
        });
    }
}
exports.StoreRepository = StoreRepository;
