import { FormEvent, useState } from "react";
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
import { apiUrl } from "../../../url";
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/user/slice";

export const CreateStoreForm = () => {
  const [imgUrl, setImgUrl] = useState<null | string>(null);
  const { user_id } = useSelector(userSelector);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

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

  const createStore = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/store/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          desc: desc,
          image: imgUrl,
          user_id: user_id,
        }),
      });

      if (res.status == 201) {
        alert("Loja criada!");
      } else {
        const response = await res.json();
        alert(await response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form onSubmit={createStore}>
        <FormTitle>Cadastrar Loja</FormTitle>
        <FormLabel>Nome da Loja</FormLabel>
        <FormInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        ></FormInput>
        <FormLabel>Descrição da Loja</FormLabel>
        <FormTextarea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        ></FormTextarea>
        <FormLabel>Imagem da Loja</FormLabel>
        <FileContainer>
          <InputFile
            onChange={(e) => changeImage(e)}
            type="file"
            required
          ></InputFile>
          <SelectedImage
            src={imgUrl ? imgUrl : DefaultStoreImage}
          ></SelectedImage>
        </FileContainer>
        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </Form>
    </>
  );
};
