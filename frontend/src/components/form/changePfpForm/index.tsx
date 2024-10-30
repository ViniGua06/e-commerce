import { useSelector } from "react-redux";
import { Button } from "../../button";
import {
  FileInput,
  Form,
  FormContainer,
  PfpContainer,
  ProphilePhoto,
} from "./styles";
import { userSelector } from "../../../redux/user/slice";

import defaultPfp from "../../../../public/defaultprofile.svg";
import { FormEvent, useEffect, useState } from "react";
import { apiUrl } from "../../../url";
import { useNavigate } from "react-router-dom";

export const ChangePfpForm = () => {
  const [imgUrl, setImgUrl] = useState<null | string>(null);
  const { user_id, image, token } = useSelector(userSelector);

  useEffect(() => {
    console.log(token);
  }, []);

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

  const setImage = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/user/${user_id}/setimage`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-acess-token": localStorage.getItem("token"),
        },
        body: JSON.stringify({
          image: imgUrl,
        }),
      });

      if (res.status == 200) {
        location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {});
  return (
    <>
      <FormContainer>
        <Form onSubmit={setImage}>
          <FileInput
            accept=".png, .jpg, .jpeg"
            onChange={(e) => changeImage(e)}
            type="file"
            required
          />
          <Button
            type="submit"
            text="Enviar"
            onClick={() => console.log("")}
          ></Button>
        </Form>
        <PfpContainer>
          <ProphilePhoto
            src={
              imgUrl == null
                ? image == undefined
                  ? defaultPfp
                  : image
                : imgUrl
            }
            height={"300px"}
          ></ProphilePhoto>
        </PfpContainer>
      </FormContainer>
    </>
  );
};
