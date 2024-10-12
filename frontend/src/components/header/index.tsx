import { useSelector } from "react-redux";
import { HeaderS, Nav, NavList, Title } from "./styles";

import { Link } from "react-router-dom";
import { userSelector } from "../../redux/user/slice";

import defaultPfp from "../../../public/defaultprofile.svg";

import { useEffect, useState } from "react";
import { Modal } from "../modal";
import { ChangePfpForm } from "../form/changePfpForm";

export const Header = () => {
  const { logged, image } = useSelector(userSelector);
  const [activeModal, setActiveModal] = useState(false);

  useEffect(() => {});

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
              <>
                <Link to={"/user"}>Pagina de Usuario</Link>

                <li>
                  <img
                    onClick={() => setActiveModal(true)}
                    src={image != undefined ? image : defaultPfp}
                    alt=""
                    width={"60px"}
                    height={"60px"}
                    style={{ borderRadius: "50%", objectFit: "cover" }}
                  />
                </li>
              </>
            )}
          </NavList>
        </Nav>
        <Modal
          title="Trocar foto de Perfil"
          active={activeModal}
          functionWhenClose={() => setActiveModal(false)}
        >
          <ChangePfpForm></ChangePfpForm>
        </Modal>
      </HeaderS>
    </>
  );
};
