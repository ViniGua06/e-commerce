import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  height: fit-content;
  border-right: solid black 1px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-inline: 1.8rem;
  gap: 1rem;
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  padding: 0.4rem;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 0.4rem;
  background: #4e3f30;
  color: whitesmoke;
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
