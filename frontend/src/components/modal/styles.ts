import styled from "styled-components";

interface IModal {
  isOpened: boolean;
}

export const ModalBackground = styled.div<IModal>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpened ? "grid" : "none")};
  place-items: center;
`;

export const ModalContainer = styled.div`
  width: 60%;
  height: 80%;
  background: white;
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 10%;
  border-bottom: inset 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 2rem;
`;

export const ModalTitle = styled.h2`
  color: #4e3f30;
`;

export const ModalMain = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
`;

export const CloseModal = styled.img`
  height: 20px;
  cursor: pointer;
  object-fit: cover;
`;
