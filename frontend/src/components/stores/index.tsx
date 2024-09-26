import { useSelector } from "react-redux";
import { apiUrl } from "../../url";
import { StoreCard } from "../cards/storeCard";
import { Container, NoStoreAlert, Title } from "./styles";
import { userSelector } from "../../redux/user/slice";
import { useEffect, useState } from "react";
import { IStore } from "../../models/Store";

export const StoresContainer = () => {
  const { user_id } = useSelector(userSelector);
  const [stores, setStores] = useState<IStore[]>([]);

  const getUserStores = async () => {
    try {
      const res = await fetch(`${apiUrl}/store/${user_id}`);
      const data = await res.json();

      setStores(data);

      alert(user_id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserStores();
  }, []);
  return (
    <>
      <Title>Lojas</Title>
      <Container>
        {stores.length > 0 ? (
          stores.map((item) => {
            return (
              <>
                <StoreCard
                  _id={item._id}
                  code={item.code}
                  desc={item.desc}
                  image={item.image}
                  name={item.name}
                ></StoreCard>
              </>
            );
          })
        ) : (
          <NoStoreAlert>Não há lojas</NoStoreAlert>
        )}
      </Container>
    </>
  );
};
