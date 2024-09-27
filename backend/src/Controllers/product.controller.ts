import { IProduct } from "../Interfaces/IProduct";
import { ProductRepository } from "../Repositories/product.repository";

import { NextFunction, Request, Response } from "express";

const productRepository = new ProductRepository();

export class ProductController {
  getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    const products = await productRepository.getAllProducts();

    res.status(200).json(products);
  };

  getProductById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { product_id } = req.params;
      const product = await productRepository.getProductById(product_id);

      res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  };

  getProductsByStore = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const { store_id } = req.params;

      const products = await productRepository.getProductsByStoreId(store_id);

      res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  };

  createProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const product: IProduct = req.body;

      const { store_id } = req.params;

      const insertedProduct = await productRepository.createProduct(
        product,
        store_id
      );

      res.status(201).json(insertedProduct);
    } catch (error) {
      next(error);
    }
  };

  updateproduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const props: IProduct = req.body;
      const { product_id } = req.params;

      const updatedProduct = await productRepository.updateProduct(
        props,
        product_id
      );

      res.status(200).json({
        message: `Produto: ${updatedProduct.name} - ${updatedProduct.id} foi atualizado!`,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { product_id } = req.params;

      const deletedProduct = await productRepository.deleteProduct(product_id);

      res.status(200).json({
        message: `Produto: ${deletedProduct.name} - ${deletedProduct.id} deletado!`,
      });
    } catch (error) {
      next(error);
    }
  };

  rateProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { product_id } = req.params;
      const { rate } = req.body;

      const updatedProduct = await productRepository.rateProduct(
        product_id,
        rate
      );

      res
        .status(200)
        .json({ message: "Nota " + updatedProduct.rating + " adicionada!" });
    } catch (error) {
      next(error);
    }
  };

  deleteAll = async (req: Request, res: Response) => {
    await productRepository.deleteAll();

    res.status(200).json({ message: "PRODUTOS DELETADOS!" });
  };
}
