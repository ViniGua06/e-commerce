import { useEffect, useState } from "react";
import { Header } from "../../components/header";
import { SearchBar } from "../../components/searchbar";
import { apiUrl } from "../../url";
import { Main, ProductContainer } from "./styles";
import { IProduct } from "../../models/Product";
import { ProductCard } from "../../components/cards/productCard";

export const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [productsFiltred, setProductsFiltred] = useState<IProduct[]>([]);

  const getAllProducts = async () => {
    const res = await fetch(`${apiUrl}/getall`);

    const data = await res.json();

    setProducts(data);
    setProductsFiltred(data);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <>
      <Header></Header>
      <Main>
        <SearchBar
          setFiltred={setProductsFiltred}
          products={products}
        ></SearchBar>

        <ProductContainer>
          {productsFiltred.length > 0 ? (
            productsFiltred.map((item) => {
              return (
                <>
                  <ProductCard
                    _id={item._id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity}
                    rating={item.rating}
                    store={item.store}
                    tags={item.tags}
                    image={item.image}
                    desc={item.desc}
                  ></ProductCard>
                </>
              );
            })
          ) : (
            <>
              <h1>Nenhum produto encontrado!</h1>
            </>
          )}
        </ProductContainer>
      </Main>
    </>
  );
};
