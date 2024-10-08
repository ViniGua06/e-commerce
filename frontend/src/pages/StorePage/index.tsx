import { useSelector } from "react-redux";
import { storeSelector } from "../../redux/store/slice";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../url";
import { useEffect, useState } from "react";
import { IStore } from "../../models/Store";
import { Header } from "../../components/header";

export const StorePage = () => {
  const { name, image } = useSelector(storeSelector);
  const { store_id } = useParams();

  const [store, setStore] = useState<IStore>();

  const getStore = async () => {
    try {
      const res = await fetch(`${apiUrl}/store/${store_id}`);
      const data = await res.json();

      setStore(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStore();
  }, []);

  return (
    <>
      <Header></Header>
      {store ? <></> : <h2>Nao existe</h2>}
    </>
  );
};
