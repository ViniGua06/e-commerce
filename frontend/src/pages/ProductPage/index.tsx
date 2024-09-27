import { useParams } from "react-router-dom";
import { apiUrl } from "../../url";
import { useEffect, useState } from "react";
import { IProduct } from "../../models/Product";
import { Header } from "../../components/header";
import { Main } from "./styles";

export const ProductPage = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  const updateProduct = async () => {
    try {
      const res = await fetch(`${apiUrl}/productbyid/${product_id}`);

      const data = await res.json();

      if (res.status == 200) setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    updateProduct();
  }, []);
  return (
    <>
      <Header></Header>
      <Main>
        {product != null ? (
          <>
            {product?.name} <img src={product?.image} />a
          </>
        ) : (
          <h1>Produto não encontrado</h1>
        )}
      </Main>
    </>
  );
};
