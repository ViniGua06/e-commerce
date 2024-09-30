import { useSelector } from "react-redux";
import { storeSelector } from "../../redux/store/slice";
import { useParams } from "react-router-dom";

export const StorePage = () => {
  const { name, image } = useSelector(storeSelector);
  const { store_id } = useParams();

  return <>STORE - {name}</>;
};
