import { IProduct } from "../../../models/Product";
import {
  ProductCardContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  RatingContainer,
} from "./styles";

import emptyStar from "../../../../public/stars/empty.star.svg";

import { useEffect, useState } from "react";
import { Stars } from "../../ratingStars";
import { useNavigate } from "react-router-dom";

export const ProductCard = (product: IProduct) => {
  const { name, price, quantity, rating, store, tags, image, _id } = product;
  const [average, setAverage] = useState(0);
  const navigate = useNavigate();

  const calcAverage = () => {
    let soma = 0;
    for (let i = 0; i < rating.length; i++) {
      soma += rating[i];
    }

    setAverage(soma / rating.length);
  };

  useEffect(() => {
    calcAverage();
  }, []);

  const goToProductPage = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <>
      <ProductCardContainer onClick={goToProductPage}>
        <ProductName>{name.toUpperCase()}</ProductName>
        <ProductImage src={image} alt="" />
        {rating.length == 0 ? (
          <RatingContainer>
            <img src={emptyStar} height={"100%"} alt="" />
            <img src={emptyStar} height={"100%"} alt="" />
            <img src={emptyStar} height={"100%"} alt="" />
            <img src={emptyStar} height={"100%"} alt="" />
            <img src={emptyStar} height={"100%"} alt="" />
            <i>Sem Avaliações</i>
          </RatingContainer>
        ) : (
          <>
            <RatingContainer>
              <Stars average={average}></Stars>
            </RatingContainer>
          </>
        )}
        <ProductPrice>
          {Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </ProductPrice>
      </ProductCardContainer>
    </>
  );
};
