import styled from "styled-components";

const ButtonStyled = styled.button<IButtonStyled>`
  width: ${(props) => (props.width ? props.width : "auto")};
  padding: 0.6rem 0.9rem;
  background: #96795c;
  color: white;
  cursor: pointer;
  border: none;

  &:hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
  }
`;

type ButtonType = "button" | "submit" | "reset" | undefined;

interface ButtonProps {
  width?: string;
  type: ButtonType;
  text: string;
  onClick: () => void;
}

interface IButtonStyled {
  width?: string;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  text,
  onClick,
  width,
}) => {
  return (
    <ButtonStyled width={width} type={type} onClick={onClick}>
      {text}
    </ButtonStyled>
  );
};
