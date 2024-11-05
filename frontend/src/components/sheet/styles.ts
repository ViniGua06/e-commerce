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
  position: absolute;
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
  width: 100%;
  height: 100%;
`;
