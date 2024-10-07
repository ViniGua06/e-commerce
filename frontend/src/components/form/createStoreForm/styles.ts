import styled from "styled-components";

export const Form = styled.form`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  padding-inline: 16rem;
`;

export const FormTitle = styled.h1`
  color: #96795c;
  font-size: 3rem;
  font-weight: 500;
`;

export const FormLabel = styled.label`
  color: #96795c;
`;

export const FormInput = styled.input`
  width: 100%;
  outline: none;
  border-radius: 2rem;
  border: solid #4e3f30 1px;
  padding-inline: 0.4rem;
  padding-block: 0.7rem;
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  outline: none;
  border-radius: 2rem;
  border: solid #4e3f30 1px;
  padding: 1rem;
  resize: vertical;
`;

export const FileContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputFile = styled.input`
  width: 17%;
  outline: none;
`;

export const SelectedImage = styled.img`
  max-width: 100%;
  max-height: 120px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 1rem 2rem;
  background: #4e3f30;
  border: none;
  color: white;
  border-radius: 2rem;
`;
