import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 0.6rem 0.9rem;
  background: #96795c;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
`;

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>;
};
