import { useDispatch, useSelector } from "react-redux";
import {
  ImageContainer,
  ProductContainer,
  ProductsContainer,
  SecondContainer,
  SheetBackground,
  SheetContainer,
  Title,
  TitleContainer,
} from "./styles";
import { desactiveSheet, sheetSelector } from "../../redux/sheet/slice";

import { X } from "lucide-react";
import { productSelector } from "../../redux/cart/slice";
import { useEffect } from "react";

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
    console.log(products, "VAI");
  }, []);
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

                      <h2>{item.demand}</h2>
                    </SecondContainer>
                  </ProductContainer>
                </>
              );
            })}
          </ProductsContainer>
        </SheetContainer>
      </SheetBackground>
    </>
  );
};
