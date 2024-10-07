import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: fit-content;
  padding: 3rem;
  background: #f5f0e1;
`;

export const FirstGreetings = styled.h1`
  color: #4e3f30;
`;

export const CreateStoreButton = styled.button`
  padding: 0.6rem 0.9rem;
  background: #4e3f30;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
`;

export const LogoutButton = styled.button`
  padding: 0.6rem 0.9rem;
  background: #96795c;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
`;
