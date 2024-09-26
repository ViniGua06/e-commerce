import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../components/header";
import { logout, userSelector } from "../../redux/user/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirstGreetings, Main } from "./styles";
import { StoresContainer } from "../../components/stores";

export const UserPage = () => {
  const { user, logged } = useSelector(userSelector);

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
  return (
    <>
      <Header></Header>
      <Main>
        <FirstGreetings>
          {greetings}
          {user}
        </FirstGreetings>
        <StoresContainer></StoresContainer>
        <button onClick={logoutUser}>Sair</button>
      </Main>
    </>
  );
};
