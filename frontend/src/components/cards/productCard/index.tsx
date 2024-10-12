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
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../../url";
import { IStore } from "../../../models/Store";
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/user/slice";

export const ProductCard = (product: IProduct) => {
  const { name, price, quantity, rating, store, tags, image, _id } = product;
  const [average, setAverage] = useState(0);
  const navigate = useNavigate();

  const { user_id } = useSelector(userSelector);

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

  const { product_id } = useParams();
  const [next, setNext] = useState(false);
  const [producto, setProduct] = useState<IProduct>();

  const updateProduct = async () => {
    try {
      const res = await fetch(`${apiUrl}/productbyid/${product_id}`);

      const data = await res.json();

      if (res.status == 200) {
        setProduct(data);
        setNext(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [storea, setStore] = useState<IStore>();

  const [allowed, setAllowed] = useState(false);

  const getStores = async () => {
    try {
      const res = await fetch(`${apiUrl}/store/${product?.store}`);
      const data = await res.json();

      setStore(data);
      setNext(false);
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfIsAdmin = () => {
    if (storea?.user_id == user_id) {
      setAllowed(true);
      alert(allowed);
    }
  };

  useEffect(() => {
    updateProduct();
  }, []);

  useEffect(() => {
    if (next) getStores();

    checkIfIsAdmin();
  }, []);

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
