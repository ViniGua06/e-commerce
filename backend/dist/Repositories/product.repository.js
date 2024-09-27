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
exports.ProductRepository = void 0;
const BadRequest_error_1 = require("../Errors/BadRequest.error");
const Product_1 = require("../Models/Product");
const mongodb_1 = require("mongodb");
class ProductRepository {
    constructor() {
        this.getAllProducts = () => __awaiter(this, void 0, void 0, function* () {
            const products = yield Product_1.Product.find();
            return products;
        });
        this.getProductById = (product_id) => __awaiter(this, void 0, void 0, function* () {
            console.log(product_id);
            const product = yield Product_1.Product.findOne({
                _id: new mongodb_1.ObjectId(product_id),
            });
            return product;
        });
        this.getProductsByStoreId = (store_id) => __awaiter(this, void 0, void 0, function* () {
            return yield Product_1.Product.find({ store: store_id });
        });
        this.createProduct = (product, store_id) => __awaiter(this, void 0, void 0, function* () {
            const newProduct = new Product_1.Product({
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                rating: [],
                store: store_id,
                tags: product.tags,
                image: product.image,
            });
            return yield newProduct.save();
        });
        this.updateProduct = (product, product_id) => __awaiter(this, void 0, void 0, function* () {
            if (!product_id)
                throw new BadRequest_error_1.BadRequestError("Necessário código!");
            const updatedProduct = yield Product_1.Product.findOneAndUpdate({
                _id: product_id,
            }, {
                name: product.name,
                price: product.price,
                quantity: product.quantity,
                image: product.image,
            }, {
                new: true,
                runValidators: true,
            });
            if (!updatedProduct)
                throw new BadRequest_error_1.BadRequestError("Produto não encontrado!");
            return updatedProduct;
        });
        this.rateProduct = (product_id, rate) => __awaiter(this, void 0, void 0, function* () {
            const product = yield Product_1.Product.findOne({ _id: product_id });
            if (!product)
                throw new BadRequest_error_1.BadRequestError("Produto não encontrado!");
            product.rating.push(rate);
            const updatedProduct = yield product.save();
            return updatedProduct;
        });
        this.deleteProduct = (product_id) => __awaiter(this, void 0, void 0, function* () {
            if (!product_id)
                throw new BadRequest_error_1.BadRequestError("Código faltando!");
            const deletedProduct = yield Product_1.Product.findOneAndDelete({
                _id: product_id,
            }, {
                runValidators: true,
            });
            if (!deletedProduct)
                throw new BadRequest_error_1.BadRequestError("Produto não encontrado!");
            return deletedProduct;
        });
        this.deleteAll = () => {
            return Product_1.Product.deleteMany().exec();
        };
    }
}
exports.ProductRepository = ProductRepository;
