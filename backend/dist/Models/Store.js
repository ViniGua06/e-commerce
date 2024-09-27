"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const storeScheme = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    user_id: {
        type: String,
    },
});
exports.Store = mongoose_1.default.model("Store", storeScheme);
