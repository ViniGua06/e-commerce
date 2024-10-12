import { FormEvent, useEffect, useState } from "react";
import { Header } from "../../components/header";
import { Main } from "../Home/styles";
import { useSelector } from "react-redux";
import { userSelector } from "../../redux/user/slice";
import { useNavigate, useParams } from "react-router-dom";
import { apiUrl } from "../../url";
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
} from "../../components/form/createProductForm/styles";
import {
  FileContainer,
  InputFile,
  SelectedImage,
} from "../../components/form/createStoreForm/styles";
import { Button } from "../../components/button";

import DefaultStoreImage from "../../../../../public/book.svg";
import AddIcon from "../../../public/add.svg";
import RemoveTagIcon from "../../../public/x.svg";

export const EditProductPage = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0.1);
  const [quantity, setQuantity] = useState(1);

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

  const createProduct = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/product/create/${store_id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          desc: desc,
          price: price,
          image: imgUrl,
          tags: tagsArray,
          quantity: quantity,
        }),
      });

      const data = await res.json();

      if (res.status == 201) {
        alert("Produto criado com sucesso!");
        navigate(`/store/${store_id}`);
      } else {
        alert(data.message);
      }
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
      <Form onSubmit={createProduct}>
        <FormTitle>Cadastro de Produto</FormTitle>
        <Label>Nome</Label>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        ></Input>
        <Label>Descrição</Label>
        <TextArea
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
        ></TextArea>
        <Label>Preço</Label>
        <Input
          value={price}
          onChange={(e) => setPrice(parseFloat(e.target.value))}
          type="number"
          step={0.01}
          min={0.1}
          placeholder="0,00"
          required
        ></Input>
        <Label>Quantidade disponível</Label>
        <Input
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          type="number"
          min={1}
          required
        ></Input>
        <FileContainer>
          <InputFile
            accept=".png, .jpg, .jpeg"
            onChange={(e) => changeImage(e)}
            type="file"
            required
          ></InputFile>
          <SelectedImage src={imgUrl!}></SelectedImage>
        </FileContainer>
        <Label>Tags</Label>
        <AddTagContainer>
          <AddTagInput
            type="text"
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          ></AddTagInput>
          <AddTagImage
            src={AddIcon}
            onClick={() => addTag(tag.toLocaleLowerCase())}
            alt=""
          />
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
