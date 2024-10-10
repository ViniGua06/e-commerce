import { CreateProductForm } from "../../components/form/createProductForm";
import { Header } from "../../components/header";
import { Main } from "./styles";

export const CreateProductPage = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <CreateProductForm></CreateProductForm>
      </Main>
    </>
  );
};
