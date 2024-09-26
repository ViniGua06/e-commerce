import styled from "styled-components";

export const GlassContainer = styled.div`
  width: 80%;
  height: 69px;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 3rem;
  overflow: hidden;
`;

export const SearchBarInput = styled.input`
  width: 90%;
  border: none;
  cursor: text;
  font-size: 1.5rem;
`;

export const GlassImage = styled.img`
  height: 40%;
  cursor: pointer;

  &: hover {
    transform: scale(1.2);
  }
`;
