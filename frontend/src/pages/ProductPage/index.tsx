import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../url";
import { useEffect, useState } from "react";
import { IProduct } from "../../models/Product";
import { Header } from "../../components/header";
import {
  DescriptionContainer,
  ImageContainer,
  Main,
  ProductName,
  ProductPageContainer,
  ProductPrice,
  RateProductConatainer,
  RatingStars,
  SecondContainer,
  TagsContainer,
} from "./styles";
import { RatingContainer } from "../../components/cards/productCard/styles";
import { Stars } from "../../components/ratingStars";

import emptyStar from "../../../public/stars/empty.star.svg";
import fullStar from "../../../public/stars/full.star.svg";
import { Graphic } from "../../components/graphic";
import { IStore } from "../../models/Store";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../redux/user/slice";
import { Button } from "../../components/button";
import { addProduct, productSelector } from "../../redux/cart/slice";

export const ProductPage = () => {
  const { product_id } = useParams();
  const [product, setProduct] = useState<IProduct>();
  const [average, setAverage] = useState(0);
  const [store, setStore] = useState<IStore>();

  const [rate, setRate] = useState(0);

  const { user_id } = useSelector(userSelector);

  const [allowed, setAllowed] = useState(false);

  const [next, setNext] = useState(false);

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
    if (store?.user_id == user_id) {
      setAllowed(true);
    }
  };

  useEffect(() => {
    updateProduct();
  }, []);

  useEffect(() => {
    if (next) getStores();

    checkIfIsAdmin();
  });

  const rateProduct = async () => {
    try {
      await fetch(`${apiUrl}/rateproduct/${product_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rate: rate,
        }),
      });

      location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const setAverageRating = () => {
    if (product?.rating) {
      let soma = 0;
      for (let i = 0; i < product?.rating.length; i++) {
        soma += product.rating[i];
      }

      console.log(soma / product.rating.length);

      setAverage(soma / product.rating.length);
    }
  };

  useEffect(() => {
    setAverageRating();
  }, [product]);

  const navigate = useNavigate();

  const deleteProduct = async () => {
    await fetch(`${apiUrl}/deleteproduct/${product_id}`, { method: "DELETE" });
    navigate("/search");
  };

  // Testing reducer
  const { products } = useSelector(productSelector);
  const dispatch = useDispatch();

  const addProductToCart = () => {
    dispatch(addProduct({ product: product! }));
  };

  useEffect(() => {
    console.log(products, "reducer");
  }, []);

  return (
    <>
      <Header></Header>
      <button onClick={addProductToCart}>Adicionar</button>
      <Main>
        {product != null ? (
          <>
            <ProductPageContainer>
              <ImageContainer>
                <img src={product.image} alt="" />
                <RateProductConatainer>
                  <h2>Avaliar produto</h2>
                  <RatingContainer>
                    <RatingStars
                      onMouseEnter={() => setRate(1)}
                      src={rate == 0 ? emptyStar : fullStar}
                      alt=""
                    />
                    <RatingStars
                      onMouseEnter={() => setRate(2)}
                      src={rate == 0 || rate == 1 ? emptyStar : fullStar}
                      alt=""
                    />
                    <RatingStars
                      onMouseEnter={() => setRate(3)}
                      src={
                        rate == 0 || rate == 1 || rate == 2
                          ? emptyStar
                          : fullStar
                      }
                      alt=""
                    />
                    <RatingStars
                      onMouseEnter={() => setRate(4)}
                      src={
                        rate == 0 || rate == 1 || rate == 2 || rate == 3
                          ? emptyStar
                          : fullStar
                      }
                      alt=""
                    />
                    <RatingStars
                      onMouseEnter={() => setRate(5)}
                      src={
                        rate == 0 ||
                        rate == 1 ||
                        rate == 2 ||
                        rate == 3 ||
                        rate == 4
                          ? emptyStar
                          : fullStar
                      }
                      alt=""
                    />
                  </RatingContainer>
                  <button onClick={rateProduct}>Avaliar</button>

                  {allowed ? (
                    <>
                      <Button
                        text="Editar"
                        type="button"
                        onClick={alert}
                      ></Button>
                      <Button
                        text="Excluir"
                        type="button"
                        onClick={deleteProduct}
                      ></Button>
                    </>
                  ) : null}
                </RateProductConatainer>
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
                    </>
                  ) : (
                    <Stars average={average}></Stars>
                  )}
                </RatingContainer>
                <TagsContainer>
                  {product.tags.map((tag) => {
                    return (
                      <>
                        <div key={tag}>{tag}</div>
                      </>
                    );
                  })}
                </TagsContainer>
                <ProductPrice>
                  {Intl.NumberFormat("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  }).format(product.price)}
                </ProductPrice>
                <DescriptionContainer>{product.desc}</DescriptionContainer>
              </SecondContainer>
            </ProductPageContainer>
            {allowed ? <Graphic ratings={product.rating}></Graphic> : null}
          </>
        ) : (
          <h1>Produto não encontrado</h1>
        )}
      </Main>
    </>
  );
};
