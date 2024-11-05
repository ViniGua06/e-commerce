import styled from "styled-components";

export const Main = styled.main`
  padding: 3rem;
  background: #f5f0e1;
`;

export const RatingStars = styled.img`
  height: 100%;
  cursor: pointer;
`;

export const RateProductConatainer = styled.div`
  position: absolute;
  color: black;
  background: #96795c;
  color: white;
  padding: 2rem;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  visibility: hidden;
  transition: width 0.3s ease, visibility 0.3s ease;

  & > button {
    padding: 1rem;
    background: #4e3f30;
    color: white;
    border: none;
    cursor: pointer;
    margin-bottom: 1rem;
  }
`;

export const ProductPageContainer = styled.section`
  width: 100%;
  height: fit-content;
  border: solid #4e3f30 2px;
  border-radius: 3rem;
  overflow: hidden;
  display: flex;
`;

export const SecondContainer = styled.div`
  width: 100%;
  height: 100%;
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
  position: relative;

  & > img {
    width: 100%;
  }

  &:hover > div {
    visibility: visible;
    width: 80%;
  }
`;

export const ProductName = styled.h1`
  color: #4e3f30;
  font-size: 3rem;
  margin-bottom: -1rem;
`;

export const ProductPrice = styled.h1`
  color: #4e3f30;
  font-size: 2rem;
`;

export const TagsContainer = styled.div`
  width: 100%;
  max-height: 45px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;

  & > div {
    border: solid #4e3f30 1px;
    padding: 0.6rem 1rem;
    border-radius: 2rem;
    background: #4e3f30;
    color: white;
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 1rem;
  width: 100%;
  max-height: 270px;
  border: none;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 2rem;
  color: white;
  padding: 1rem;
  color: #4e3f30;
  overflow-y: auto;
`;

export const BuyButton = styled.button`
  padding: 0.8rem 0.8rem;
  background: rgb(237, 161, 55);
  color: whitesmoke;
  border: none;
  border-radius: 1.4rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AddToCartButton = styled.button`
  padding: 0.8rem 0.8rem;
  background: #4e3f30;
  color: whitesmoke;
  border: none;
  border-radius: 1.4rem;
  margin-top: 1rem;
  cursor: pointer;
  margin-left: 1rem;

  &:hover {
    transform: scale(1.1);
  }
`;
