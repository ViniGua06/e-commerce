import { Router } from "express";
import { ProductController } from "../Controllers/product.controller";

export const productRouter = Router();

const productController = new ProductController();

productRouter.get("/getall", productController.getAllProducts);
productRouter.get("/productbyid/:product_id", productController.getProductById);
productRouter.get(
  "/productbystore/:store_id",
  productController.getProductsByStore
);
productRouter.post(
  "/product/create/:store_id",
  productController.createProduct
);
productRouter.post("/rateproduct/:product_id", productController.rateProduct);
productRouter.put(
  "/updateproduct/:product_id",
  productController.updateproduct
);
productRouter.delete(
  "/deleteproduct/:product_id",
  productController.deleteProduct
);

productRouter.delete("/delete/all", productController.deleteAll);
