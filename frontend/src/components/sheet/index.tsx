import { useDispatch, useSelector } from "react-redux";
import {
  BuyButton,
  ImageContainer,
  PlusMinusContainer,
  PriceContainer,
  ProductContainer,
  ProductsContainer,
  SecondContainer,
  SheetBackground,
  SheetContainer,
  Title,
  TitleContainer,
} from "./styles";
import { desactiveSheet, sheetSelector } from "../../redux/sheet/slice";

import { X, Plus, Minus } from "lucide-react";

import {
  decreaseDemand,
  increaseDemand,
  productSelector,
} from "../../redux/cart/slice";
import { useEffect, useState } from "react";

export const SheetComponent = () => {
  const { active } = useSelector(sheetSelector);

  const { products } = useSelector(productSelector);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(desactiveSheet());
  };

  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      setTimeout(() => {
        document.body.style.overflowY = "auto";
      }, 400);
    }
  }, [active]);

  const [totalPrice, setTotalPrice] = useState(0);

  const calcTotalPrice = () => {
    let price = 0;

    for (let i = 0; i < products.length; i++) {
      price += products[i].priceAfterDemand!;
    }

    setTotalPrice(price);
  };

  useEffect(() => {
    calcTotalPrice();
  }, [products]);

  return (
    <>
      <SheetBackground active={active} onClick={closeModal}>
        <SheetContainer active={active} onClick={stopPropagation}>
          <TitleContainer>
            <X
              size={32}
              cursor={"pointer"}
              color="#4e3f30"
              onClick={closeModal}
            ></X>
            <Title>Carrinho</Title>
          </TitleContainer>

          <ProductsContainer>
            {products.map((item) => {
              return (
                <>
                  <ProductContainer key={item._id}>
                    <ImageContainer>
                      <img src={item.image} alt="" height={70} />
                    </ImageContainer>
                    <SecondContainer>
                      <h1>{item.name.toUpperCase()}</h1>

                      <h3>Quantidade: {item.demand}</h3>

                      <h3>
                        {Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        }).format(item.priceAfterDemand!)}
                      </h3>

                      <PlusMinusContainer>
                        <Plus
                          onClick={() =>
                            dispatch(increaseDemand({ id: item._id }))
                          }
                        ></Plus>
                        <Minus
                          onClick={() =>
                            dispatch(decreaseDemand({ id: item._id }))
                          }
                        ></Minus>
                      </PlusMinusContainer>
                    </SecondContainer>
                  </ProductContainer>
                </>
              );
            })}
          </ProductsContainer>
          <PriceContainer>
            Preço Total:{" "}
            {Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL",
            }).format(totalPrice)}
            <BuyButton>Finalizar Compra</BuyButton>
          </PriceContainer>
        </SheetContainer>
      </SheetBackground>
    </>
  );
};
