"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const productScheme = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    rating: {
        type: [Number],
        required: true,
    },
    tags: {
        type: [String],
        required: true,
    },
    store: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});
exports.Product = mongoose_1.default.model("Product", productScheme);
