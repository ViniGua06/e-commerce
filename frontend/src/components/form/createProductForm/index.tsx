import { FormEvent, useEffect, useState } from "react";
import {
  FileContainer,
  InputFile,
  SelectedImage,
} from "../createStoreForm/styles";

import {
  AddTagContainer,
  AddTagImage,
  AddTagInput,
  Form,
  FormTitle,
  Input,
  Label,
  RemoveTagImage,
  Tag,
  TagsContainer,
  TextArea,
} from "./styles";

import DefaultStoreImage from "../../../../public/book.svg";
import AddIcon from "../../../../public/add.svg";
import RemoveTagIcon from "../../../../public/x.svg";
import { Button } from "../../button";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../../url";
import { useSelector } from "react-redux";
import { userSelector } from "../../../redux/user/slice";

export const CreateProductForm = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  const [imgUrl, setImgUrl] = useState<null | string>(null);

  const { user_id } = useSelector(userSelector);

  const [tagsArray, setTagsArray] = useState<string[]>([]);
  const [tag, setTag] = useState("");

  const { store_id, admin } = useParams();
  const navigate = useNavigate();

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

  const addTag = (tag: string) => {
    if (tag.trim() == "") return null;

    const alreadyExists = tagsArray.find((item) => item == tag);

    if (alreadyExists) return null;

    setTagsArray((current) => [...current, tag]);
    setTag("");
  };

  const removeTag = (tag: string) => {
    const newArray = tagsArray.filter((item) => item != tag);

    setTagsArray(newArray);
  };

  const CreateProduct = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/product/create/${store_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkAdmin = () => {
    if (
      user_id != admin ||
      admin == null ||
      admin == undefined ||
      admin == ""
    ) {
      navigate("/search");
    }
  };

  useEffect(() => {
    checkAdmin();
  }, []);
  return (
    <>
      <Form>
        <FormTitle>Cadastro de Produto</FormTitle>
        <Label>Nome</Label>
        <Input type="text" required></Input>
        <Label>Descrição</Label>
        <TextArea required></TextArea>
        <Label>Preço</Label>
        <Input type="number" required></Input>
        <FileContainer>
          <InputFile
            accept=".png, .jpg, .jpeg"
            onChange={(e) => changeImage(e)}
            type="file"
            required
          ></InputFile>
          <SelectedImage
            src={imgUrl ? imgUrl : DefaultStoreImage}
          ></SelectedImage>
        </FileContainer>
        <Label>Tags</Label>
        <AddTagContainer>
          <AddTagInput
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          ></AddTagInput>
          <AddTagImage src={AddIcon} onClick={() => addTag(tag)} alt="" />
        </AddTagContainer>
        <TagsContainer>
          {tagsArray.map((item) => {
            return (
              <Tag>
                <h3>{item}</h3>
                <RemoveTagImage
                  src={RemoveTagIcon}
                  onClick={() => removeTag(item)}
                ></RemoveTagImage>
              </Tag>
            );
          })}
        </TagsContainer>
        <Button
          onClick={() => console.log("o")}
          type="submit"
          text="Enviar"
          width="60%"
        ></Button>
      </Form>
    </>
  );
};
