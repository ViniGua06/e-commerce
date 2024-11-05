import { useDispatch, useSelector } from "react-redux";
import {
  ProductsContainer,
  SheetBackground,
  SheetContainer,
  Title,
  TitleContainer,
} from "./styles";
import { desactiveSheet, sheetSelector } from "../../redux/sheet/slice";

import { X } from "lucide-react";
import { productSelector } from "../../redux/cart/slice";

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
                  <div key={item._id}>
                    <h1>{item.name}</h1>
                    <img src={item.image} alt="" height={70} />
                  </div>
                </>
              );
            })}
          </ProductsContainer>
        </SheetContainer>
      </SheetBackground>
    </>
  );
};
