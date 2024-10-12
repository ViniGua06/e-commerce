import {
  CloseModal,
  ModalBackground,
  ModalContainer,
  ModalHeader,
  ModalMain,
  ModalTitle,
} from "./styles";

import closeModalIcon from "../../../public/x.svg";
import { ReactNode } from "react";

interface IModal {
  active: boolean;
  functionWhenClose: () => void;
  children?: ReactNode;
  title: string;
}

export const Modal = (props: IModal) => {
  return (
    <>
      <ModalBackground isOpened={props.active}>
        <ModalContainer>
          <ModalHeader>
            <ModalTitle>{props.title}</ModalTitle>
            <CloseModal
              onClick={props.functionWhenClose}
              src={closeModalIcon}
            ></CloseModal>
          </ModalHeader>
          <ModalMain>{props.children}</ModalMain>
        </ModalContainer>
      </ModalBackground>
    </>
  );
};
