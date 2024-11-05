import styled from "styled-components";

export const Main = styled.main`
  padding-top: 2rem;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProductContainer = styled.section`
  padding-inline: 5rem;
  margin-top: 2rem;
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 0rem;
`;
