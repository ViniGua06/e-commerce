import { IProduct } from "../../../models/Product";
import { ProductCardContainer, ProductImage, RatingContainer } from "./styles";

import halfStar from "../../../public/stars/half.star.svg";
import emptyStar from "../../../../public/stars/empty.star.svg";
import fullStar from "../../../public/stars/full.star.svg";

import { useEffect, useState } from "react";
import { Stars } from "../../ratingStars";

export const ProductCard = (product: IProduct) => {
  const { code, name, price, quantity, rating, store, tags, image } = product;
  const [average, setAverage] = useState(0);

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

  return (
    <>
      <ProductCardContainer>
        <h2>{name.toUpperCase()}</h2>
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
        <h2>
          {Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(price)}
        </h2>
      </ProductCardContainer>
    </>
  );
};
