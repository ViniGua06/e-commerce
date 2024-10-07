import { CreateStoreForm } from "../../components/form/createStoreForm";
import { Header } from "../../components/header";
import { Main } from "./styles";

export const CreateStorePage = () => {
  return (
    <>
      <Header></Header>
      <Main>
        <CreateStoreForm></CreateStoreForm>
      </Main>
    </>
  );
};
