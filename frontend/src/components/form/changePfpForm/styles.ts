import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  height: 87%;
  display: flex;
  justify-content: space-between;
`;

export const Form = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

export const FileInput = styled.input`
  cursor: pointer;
`;

export const PfpContainer = styled.div`
  width: 50%;
  height: 100%;
  display: grid;
  place-items: center;
`;

export const ProphilePhoto = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
`;
