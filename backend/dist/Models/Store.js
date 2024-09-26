"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid");
const storeScheme = new mongoose_1.default.Schema({
    code: {
        type: String,
        default: uuid_1.v4,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    products: {
        type: [
            {
                type: String,
            },
        ],
    },
});
exports.Store = mongoose_1.default.model("Store", storeScheme);
