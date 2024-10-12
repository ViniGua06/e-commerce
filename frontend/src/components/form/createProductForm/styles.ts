import styled from "styled-components";

export const Form = styled.form`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const FormTitle = styled.h1`
  color: #4e3f30;
  font-weight: 500;

  @media (max-width: 1360px) {
    font-size: 1.4rem;
  }
`;

export const Label = styled.label`
  color: #4e3f30;
  font-size: 1.3rem;

  @media (max-width: 1360px) {
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  width: 60%;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: solid #4e3f30 1px;

  @media (max-width: 1360px) {
    font-size: 0.8rem;
  }
`;

export const TextArea = styled.textarea`
  width: 60%;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: solid #4e3f30 1px;
  resize: vertical;

  @media (max-width: 1360px) {
    font-size: 0.8rem;
  }
`;

export const AddTagContainer = styled.div`
  width: 20%;
  padding: 0.5rem 0.9rem;
  border-radius: 1rem;
  height: fit-content;
  border: solid 1px;
  display: flex;
  justify-content: space-evenly;
  gap: 0.4rem;
`;

export const AddTagInput = styled.input`
  width: 75%;
  border: none;
  outline: none;
  background: transparent;
`;

export const AddTagImage = styled.img`
  cursor: pointer;
  height: 30px;
`;

export const TagsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Tag = styled.div`
  min-width: 40px;
  height: 50px;
  border: solid 1px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.3rem 1rem;
  gap: 1rem;
`;

export const RemoveTagImage = styled.img`
  height: 20px;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

export const TagErrorMessage = styled.h2`
  color: red;
`;
