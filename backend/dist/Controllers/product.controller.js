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
exports.ProductController = void 0;
const product_repository_1 = require("../Repositories/product.repository");
const productRepository = new product_repository_1.ProductRepository();
class ProductController {
    constructor() {
        this.getAllProducts = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            const products = yield productRepository.getAllProducts();
            res.status(200).json(products);
        });
        this.getProductsByStore = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { store_id } = req.params;
                const products = yield productRepository.getProductsByStoreId(store_id);
                res.status(200).json(products);
            }
            catch (error) {
                next(error);
            }
        });
        this.createProduct = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const product = req.body;
                const { store_id } = req.params;
                const insertedProduct = yield productRepository.createProduct(product, store_id);
                res.status(201).json(insertedProduct);
            }
            catch (error) {
                next(error);
            }
        });
        this.updateproduct = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const props = req.body;
                const { product_code } = req.params;
                const updatedProduct = yield productRepository.updateProduct(props, product_code);
                res.status(200).json({
                    message: `Produto: ${updatedProduct.name} - ${updatedProduct.code} foi atualizado!`,
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteProduct = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { product_code } = req.params;
                const deletedProduct = yield productRepository.deleteProduct(product_code);
                res.status(200).json({
                    message: `Produto: ${deletedProduct.name} - ${deletedProduct.code} deletado!`,
                });
            }
            catch (error) {
                next(error);
            }
        });
        this.rateProduct = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { product_code } = req.params;
                const { rate } = req.body;
                const updatedProduct = yield productRepository.rateProduct(product_code, rate);
                res
                    .status(200)
                    .json({ message: "Nota " + updatedProduct.rating + " adicionada!" });
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield productRepository.deleteAll();
            res.status(200).json({ message: "PRODUTOS DELETADOS!" });
        });
    }
}
exports.ProductController = ProductController;
