import { useSelector } from "react-redux";
import { LoginForm } from "../../components/forms/login";
import { SignUpForm } from "../../components/forms/signup";
import { Header } from "../../components/header";
import { FormsContainer, Main } from "./styles";
import { userSelector } from "../../redux/user/slice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Sign = () => {
  const { logged } = useSelector(userSelector);
  const navigate = useNavigate();

  useEffect(() => {
    if (logged) navigate("/user");
  }, [logged]);
  return (
    <>
      <Header></Header>
      <Main>
        <FormsContainer>
          <SignUpForm></SignUpForm>
          <LoginForm></LoginForm>
        </FormsContainer>
      </Main>
    </>
  );
};
