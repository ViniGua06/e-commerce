import { FormEvent, useState } from "react";
import { apiUrl } from "../../../url";
import { Form, Input, SubmitButton } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { setUser, userSelector } from "../../../redux/user/slice";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (e: FormEvent) => {
    try {
      e.preventDefault();
      const res = await fetch(`${apiUrl}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const data = await res.json();

      alert(data.message);
      alert(data.token);

      if (res.status == 200) {
        dispatch(
          setUser({
            user_id: data.user._id,
            user: data.user.name,
            email: data.user.email,
            password: data.user.password,
            stores: data.user.stores,
            token: data.token,
          })
        );

        navigate("/user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form onSubmit={login}>
        <h1>Login</h1>

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

        <SubmitButton>Login</SubmitButton>
      </Form>
    </>
  );
};
