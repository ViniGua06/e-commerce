import styled from "styled-components";

export const ProductCardContainer = styled.div`
  width: 340px;
  height: fit-content;
  background: whitesmoke;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 0 0.4rem rgba(0, 0, 0, 0.5);

  &:hover {
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.5);
    cursor: pointer;
    transform: scale(1.04);
  }

  @media (max-width: 1360px) {
    width: 280px;

    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const ProductName = styled.h2`
  color: #96795c;
`;

export const ProductPrice = styled.h2`
  color: #4e3f30;
`;

export const ProductImage = styled.img`
  width: 100%;
  min-height: 250px;
  max-height: 250px;
  object-fit: cover;

  @media (max-width: 1360px) {
    min-height: 200px;
    max-height: 200px;
  }
`;

export const RatingContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-block: 1rem;

  @media (max-width: 1360px) {
    font-size: smaller;
  }
`;
