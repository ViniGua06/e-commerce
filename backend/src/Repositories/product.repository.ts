import { BadRequestError } from "../Errors/BadRequest.error";
import { IProduct } from "../Interfaces/IProduct";
import { Product } from "../Models/Product";

import { ObjectId } from "mongodb";

export class ProductRepository {
  getAllProducts = async (): Promise<IProduct[]> => {
    const products = await Product.find();

    return products;
  };

  getProductById = async (product_id: string) => {
    try {
      console.log(product_id);
      const product = await Product.findOne({
        _id: product_id,
      });

      return product;
    } catch (error) {
      throw error;
    }
  };

  getProductsByStoreId = async (store_id: string) => {
    return await Product.find({ store: store_id });
  };

  createProduct = async (
    product: Partial<IProduct>,
    store_id: string
  ): Promise<IProduct> => {
    const newProduct = new Product({
      name: product.name,
      price: product.price,
      quantity: product.quantity,
      rating: [],
      store: store_id,
      tags: product.tags,
      image: product.image,
      desc: product.desc,
    });

    return await newProduct.save();
  };

  updateProduct = async (product: Partial<IProduct>, product_id: string) => {
    if (!product_id) throw new BadRequestError("Necessário código!");

    const updatedProduct = await Product.findOneAndUpdate(
      {
        _id: product_id,
      },
      {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product.image,
        desc: product.desc,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) throw new BadRequestError("Produto não encontrado!");

    return updatedProduct;
  };

  rateProduct = async (product_id: string, rate: number) => {
    const product = await Product.findOne({ _id: product_id });

    if (!product) throw new BadRequestError("Produto não encontrado!");

    product.rating.push(rate);

    const updatedProduct = await product.save();

    return updatedProduct;
  };

  addTags = async (product_id: string, tags: string[]) => {
    const product = await Product.findOne({ _id: product_id });
    if (!product) throw new BadRequestError("Produto não existe!");

    for (let i = 0; i < tags.length; i++) {
      product.tags.push(tags[i]);
    }

    const updatedProduct = await product.save();

    return updatedProduct;
  };

  deleteProduct = async (product_id: string) => {
    if (!product_id) throw new BadRequestError("Código faltando!");

    const deletedProduct = await Product.findOneAndDelete(
      {
        _id: product_id,
      },
      {
        runValidators: true,
      }
    );

    if (!deletedProduct) throw new BadRequestError("Produto não encontrado!");

    return deletedProduct;
  };

  deleteAll = () => {
    return Product.deleteMany().exec();
  };
}
