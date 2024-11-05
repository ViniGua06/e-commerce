import styled from "styled-components";

interface ISheet {
  active: boolean;
}

export const SheetBackground = styled.div<ISheet>`
  display: ${(props) => (props.active ? "block" : "none")};
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
`;

export const SheetContainer = styled.div<ISheet>`
  position: absolute;
  right: ${(props) => (props.active ? "0" : "-55rem")};
  width: 30%;
  height: 100vh;
  background: whitesmoke;
  border: solid 1px;
`;
