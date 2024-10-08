import { useNavigate } from "react-router-dom";
import { IStore } from "../../../models/Store";
import { ImageContainer, StoreCardContainer, StoreCardTitle } from "./styles";

export const StoreCard = (props: IStore) => {
  const { _id, name, desc, image } = props;
  const navigate = useNavigate();

  const goToStorePage = () => {
    navigate(`/store/${_id}`);
  };
  return (
    <>
      <StoreCardContainer key={_id} onClick={goToStorePage}>
        <StoreCardTitle>{name}</StoreCardTitle>
        <ImageContainer>
          <img src={image} alt="" />
        </ImageContainer>
      </StoreCardContainer>
    </>
  );
};
