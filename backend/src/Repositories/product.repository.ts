import { BadRequestError } from "../Errors/BadRequest.error";
import { IProduct } from "../Interfaces/IProduct";
import { Product } from "../Models/Product";

export class ProductRepository {
  getAllProducts = async (): Promise<IProduct[]> => {
    const products = await Product.find();

    return products;
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
    });

    return await newProduct.save();
  };

  updateProduct = async (product: Partial<IProduct>, product_code: string) => {
    if (!product_code) throw new BadRequestError("Necessário código!");

    const updatedProduct = await Product.findOneAndUpdate(
      {
        code: product_code,
      },
      {
        name: product.name,
        price: product.price,
        quantity: product.quantity,
        image: product.image,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updatedProduct) throw new BadRequestError("Produto não encontrado!");

    return updatedProduct;
  };

  rateProduct = async (product_code: string, rate: number) => {
    const product = await Product.findOne({ code: product_code });

    if (!product) throw new BadRequestError("Produto não encontrado!");

    product.rating.push(rate);

    const updatedProduct = await product.save();

    return updatedProduct;
  };

  deleteProduct = async (product_code: string) => {
    if (!product_code) throw new BadRequestError("Código faltando!");

    const deletedProduct = await Product.findOneAndDelete(
      {
        code: product_code,
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
