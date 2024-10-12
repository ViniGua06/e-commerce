import styled from "styled-components";

export const Main = styled.main`
  padding: 2rem;
  background: #f5f0e1;
`;

export const Container = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

export const StoreTitle = styled.h1`
  font-weight: 550;
  color: #4e3f30;
`;

export const ProductTitle = styled.h1`
  font-weight: 550;
  color: #4e3f30;
  margin-bottom: 1rem;
`;

export const StoreImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;

export const ProductContainer = styled.section`
  width: 100%;
  height: fit-content;
`;
