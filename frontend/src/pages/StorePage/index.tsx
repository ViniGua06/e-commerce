import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../url";
import { useEffect, useState } from "react";
import { IStore } from "../../models/Store";
import { Header } from "../../components/header";
import { IProduct } from "../../models/Product";
import {
  AddProductButton,
  Container,
  Main,
  ProductContainer,
  ProductTitle,
  StoreImage,
  StoreTitle,
} from "./styles";
import { ProductCard } from "../../components/cards/productCard";
import { Button } from "../../components/button";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/slice";

export const StorePage = () => {
  const { store_id } = useParams();

  const { user_id } = useSelector(userSelector);

  const [store, setStore] = useState<IStore>();
  const [products, setProducts] = useState<IProduct[]>([]);

  const navigate = useNavigate();

  const getStore = async () => {
    try {
      const res = await fetch(`${apiUrl}/store/${store_id}`);
      const data = await res.json();

      setStore(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      const res = await fetch(`${apiUrl}/productbystore/${store_id}`);
      const data = await res.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const goToCreateProduct = () => {
    navigate(`/store/${store_id}/create-product/${store?.user_id}`);
  };

  useEffect(() => {
    getStore();
    getProducts();

    console.log(store_id, user_id);
  }, []);

  return (
    <>
      <Header></Header>
      <Main>
        {store ? (
          <>
            <Container>
              <StoreImage src={store?.image}></StoreImage>
              <StoreTitle>{store?.name.toUpperCase()}</StoreTitle>
            </Container>

            <ProductTitle>Produtos</ProductTitle>

            <ProductContainer>
              {products.length > 0 ? (
                products.map((item) => {
                  return (
                    <>
                      {store.user_id == user_id ? (
                        <AddProductButton onClick={goToCreateProduct}>
                          Adicionar Produto
                        </AddProductButton>
                      ) : null}

                      <ProductCard
                        desc={item.desc}
                        _id={item._id}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        rating={item.rating}
                        store={item.store}
                        tags={item.tags}
                        key={item._id}
                      ></ProductCard>
                    </>
                  );
                })
              ) : (
                <>
                  <h1>Nenhum produto encontrado!</h1>
                  {user_id == store.user_id ? (
                    <>
                      <Button
                        type="button"
                        text={"Criar Produto"}
                        onClick={goToCreateProduct}
                      ></Button>
                    </>
                  ) : null}
                </>
              )}{" "}
            </ProductContainer>
          </>
        ) : (
          <h2>Loja não existe!</h2>
        )}

        {/* {store ? (
          products.length > 0 ? (
            products.map((item) => {
              return (
                <>
                  {store.user_id == user_id ? (
                    <AddProductButton onClick={goToCreateProduct}>
                      Adicionar Produto
                    </AddProductButton>
                  ) : null}

                 
                  <ProductContainer>
                    <ProductCard
                      desc={item.desc}
                      _id={item._id}
                      image={item.image}
                      name={item.name}
                      price={item.price}
                      quantity={item.quantity}
                      rating={item.rating}
                      store={item.store}
                      tags={item.tags}
                      key={item._id}
                    ></ProductCard>
                  </ProductContainer>
                </>
              );
            })
          ) : (
            <>
              <Container>
                <StoreImage src={store.image}></StoreImage>
                <StoreTitle>{store?.name.toUpperCase()}</StoreTitle>
              </Container>

              <ProductTitle>Produtos</ProductTitle>
              <h1>Nenhum produto encontrado!</h1>
              {user_id == store.user_id ? (
                <>
                  <Button
                    type="button"
                    text={"Criar Produto"}
                    onClick={goToCreateProduct}
                  ></Button>
                </>
              ) : null}
            </>
          )
        ) : (
          <h2>Loja não existe</h2>
        )} */}
      </Main>
    </>
  );
};
