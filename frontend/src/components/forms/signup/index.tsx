import { useState } from "react";
import { apiUrl } from "../../../url";
import { Form, Input, SubmitButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../../redux/user/slice";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const { token, user, email: mail, logged } = useSelector(userSelector);

  const signUp = async (e: any) => {
    try {
      e.preventDefault();
      if (confirmPassword == password) {
        const res = await fetch(`${apiUrl}/user/create`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        });

        const data = await res.json();

        const token = data.token;

        alert(data.message);

        localStorage.setItem("token", token);

        if (res.status == 201) {
          dispatch(
            setUser({
              user_id: data.user._id,
              user: name,
              email: email,
              password: password,
              stores: data.user.stores,
              token: token,
            })
          );

          navigate("/user");
        }
      } else {
        alert("Senhas não conferem");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form onSubmit={signUp}>
        <h1>Cadastrar</h1>
        <label>Nome</label>
        <Input
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        ></Input>
        <label>Email</label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
        ></Input>
        <label>Senha</label>
        <Input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          required
        ></Input>
        <label>Confirmar Senha</label>
        <Input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          required
        ></Input>
        <SubmitButton>Cadastrar</SubmitButton>
      </Form>
    </>
  );
};
