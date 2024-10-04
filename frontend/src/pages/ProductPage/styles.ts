import styled from "styled-components";

export const Main = styled.main`
  padding: 3rem;
`;

export const ProductPageContainer = styled.section`
  width: 100%;
  height: fit-content;
  border: solid 1px;
  display: flex;
`;

export const SecondContainer = styled.div`
  width: 100%;
  height: 100%;
  background: red;
  height: 100%;
  padding-inline: 1rem;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 540px;
  background: #4e3f30;
  padding: 1rem;
  display: grid;
  place-items: center;

  & > img {
    width: 100%;
  }
`;

export const ProductName = styled.h1`
  color: #4e3f30;
  font-size: 2rem;
`;
