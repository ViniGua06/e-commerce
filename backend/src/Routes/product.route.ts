import { Router } from "express";
import { ProductController } from "../Controllers/product.controller";

export const productRouter = Router();

const productController = new ProductController();

productRouter.get("/getall", productController.getAllProducts);
productRouter.get("/product/:store_id", productController.getProductsByStore);
productRouter.post("/product/create/:store_id", productController.createProduct);
productRouter.post("/rateproduct/:product_code", productController.rateProduct);
productRouter.put(
  "/updateproduct/:product_code",
  productController.updateproduct
);
productRouter.delete(
  "/deleteproduct/:product_code",
  productController.deleteProduct
);

productRouter.delete("/delete/all", productController.deleteAll);
