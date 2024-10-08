import styled from "styled-components";

export const StoreCardContainer = styled.div`
  min-width: 17rem;
  max-width: 17rem;
  height: 100%;
  padding: 0.7rem 1rem;
  gap: 1rem;
  cursor: pointer;
  border-inline: solid 1px #4e3f30;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
  }
`;

export const StoreCardTitle = styled.h2`
  color: #4e3f30;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 80%;

  & > img {
    width: 100%;
    height: 100%;
  }
`;
