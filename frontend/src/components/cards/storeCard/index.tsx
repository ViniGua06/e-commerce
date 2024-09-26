import { IStore } from "../../../models/Store";
import { StoreCardContainer, StoreCardTitle } from "./styles";

export const StoreCard = (props: IStore) => {
  const { _id, name, code, desc, image } = props;
  return (
    <>
      <StoreCardContainer key={_id}>
        <StoreCardTitle>{name}</StoreCardTitle>
      </StoreCardContainer>
    </>
  );
};
