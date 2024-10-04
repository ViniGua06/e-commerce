import { useParams } from "react-router-dom";
import { apiUrl } from "../../url";
import { useEffect, useState } from "react";
import { IProduct } from "../../models/Product";
import { Header } from "../../components/header";
import {
  ImageContainer,
  Main,
  ProductName,
  ProductPageContainer,
  SecondContainer,
} from "./styles";
import { RatingContainer } from "../../components/cards/productCard/styles";
import { Stars } from "../../components/ratingStars";

import emptyStar from "../../../public/stars/empty.star.svg";

export const ProductPage = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);
  const [average, setAverage] = useState(0);

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

  const setAverageRating = () => {
    if (product?.rating) {
      let soma = 0;
      for (let i = 0; i < product?.rating.length; i++) {
        soma += product.rating[i];
      }

      setAverage(soma / product.rating.length);
    }
  };

  useEffect(() => {
    setAverageRating();
  }, [product]);

  return (
    <>
      <Header></Header>
      <Main>
        {product != null ? (
          <>
            <ProductPageContainer>
              <ImageContainer>
                <img src={product.image} alt="" />
              </ImageContainer>
              <SecondContainer>
                <ProductName>{product.name}</ProductName>
                <RatingContainer>
                  {product.rating.length == 0 ? (
                    <>
                      <img src={emptyStar} height={"100%"} alt="" />
                      <img src={emptyStar} height={"100%"} alt="" />
                      <img src={emptyStar} height={"100%"} alt="" />
                      <img src={emptyStar} height={"100%"} alt="" />
                      <img src={emptyStar} height={"100%"} alt="" />
                      <img src={emptyStar} height={"100%"} alt="" />
                    </>
                  ) : (
                    <Stars average={average}></Stars>
                  )}
                </RatingContainer>
                <h2>
                  {Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </h2>
              </SecondContainer>
            </ProductPageContainer>
          </>
        ) : (
          <h1>Produto não encontrado</h1>
        )}
      </Main>
    </>
  );
};
