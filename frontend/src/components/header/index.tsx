import { useSelector } from "react-redux";
import { HeaderS, Nav, NavList, Title } from "./styles";

import { Link } from "react-router-dom";
import { userSelector } from "../../redux/user/slice";

export const Header = () => {
  const { logged } = useSelector(userSelector);

  return (
    <>
      <HeaderS>
        <Title>
          <Link to={"/search"}> E-Commerce</Link>
        </Title>
        <Nav>
          <NavList>
            <li>Produtos</li>
            <li>Lojas</li>

            {!logged ? (
              <Link to={"/sign"}>Entrar</Link>
            ) : (
              <Link to={"/user"}>Pagina de Usuario</Link>
            )}
          </NavList>
        </Nav>
      </HeaderS>
    </>
  );
};
