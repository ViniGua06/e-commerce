import { useState } from "react";
import {
  FileContainer,
  Form,
  FormInput,
  FormLabel,
  FormTextarea,
  FormTitle,
  InputFile,
  SelectedImage,
  SubmitButton,
} from "./styles";

import DefaultStoreImage from "../../../../public/store.svg";

export const CreateStoreForm = () => {
  const [imgUrl, setImgUrl] = useState<null | string>(null);

  const changeImage = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (typeof e.target?.result == "string") setImgUrl(e.target?.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <Form>
        <FormTitle>Cadastrar Loja</FormTitle>
        <FormLabel>Nome da Loja</FormLabel>
        <FormInput type="text"></FormInput>
        <FormLabel>Descrição da Loja</FormLabel>
        <FormTextarea></FormTextarea>
        <FormLabel>Imagem da Loja</FormLabel>
        <FileContainer>
          <InputFile onChange={(e) => changeImage(e)} type="file"></InputFile>
          <SelectedImage
            src={imgUrl ? imgUrl : DefaultStoreImage}
          ></SelectedImage>
        </FileContainer>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </Form>
    </>
  );
};
