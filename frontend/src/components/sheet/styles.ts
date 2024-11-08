import styled from "styled-components";

interface ISheet {
  active: boolean;
}

export const SheetBackground = styled.div<ISheet>`
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const SheetContainer = styled.div<ISheet>`
  display: flex;
  padding: 1rem;
  flex-direction: column;
  transition: transform 0.3s ease-in-out;
  position: fixed;
  top: 0;
  right: 0;
  width: 25%;
  height: 100vh;
  background: whitesmoke;
  border: solid 1px;
  transform: ${(props) =>
    props.active ? "translateX(0)" : "translateX(100%)"};
  z-index: 100;
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: #4e3f30;
  font-weight: 500;
`;

export const ProductsContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  gap: 1rem;

  scrollbar-color: #4e3f30;
`;

export const ProductContainer = styled.div`
  width: 100%;
  min-height: 180px;
  display: flex;
  gap: 1rem;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  border-radius: 1rem;
  overflow: hidden;

  & > img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }
`;

export const SecondContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;

  & > * {
    color: #4e3f30;
    font-weight: 500;
  }
`;

export const PlusMinusContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  & > *:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

export const BuyButton = styled.button`
  padding: 1rem;
  border: none;
  border-radius: 2rem;
  background-color: #4e3f30;
  color: white;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
  }
`;
