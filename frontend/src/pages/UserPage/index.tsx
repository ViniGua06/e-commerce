import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header";
import { logout, userSelector } from "../../redux/user/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  CreateStoreButton,
  FirstGreetings,
  LogoutButton,
  Main,
} from "./styles";
import { StoresContainer } from "../../components/stores";

export const UserPage = () => {
  const { user, logged, token, email: mail } = useSelector(userSelector);

  const [greetings, setGreetings] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!logged) navigate("/search");
  }, []);

  useEffect(() => {
    const hours = new Date().getHours();

    if (hours >= 0 && hours < 12) {
      setGreetings("Bom Dia, ");
    } else if (hours >= 12 && hours < 18) {
      setGreetings("Boa Tarde, ");
    } else {
      setGreetings("Boa Noite, ");
    }
  }, []);

  const logoutUser = () => {
    dispatch(logout());

    navigate("/sign");
  };

  const goToCreateStore = () => {
    navigate("/store/create");
  };
  return (
    <>
      <Header></Header>
      <Main>
        <FirstGreetings>
          {greetings}
          {user}
        </FirstGreetings>
        <StoresContainer></StoresContainer>
        <CreateStoreButton onClick={goToCreateStore}>
          Criar Loja
        </CreateStoreButton>
        <LogoutButton onClick={logoutUser}>Sair</LogoutButton>
      </Main>
    </>
  );
};
