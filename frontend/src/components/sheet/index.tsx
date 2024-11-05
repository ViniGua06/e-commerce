import { useDispatch, useSelector } from "react-redux";
import { SheetBackground, SheetContainer } from "./styles";
import { desactiveSheet, sheetSelector } from "../../redux/sheet/slice";

export const SheetComponent = () => {
  const { active } = useSelector(sheetSelector);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(desactiveSheet());
  };
  return (
    <>
      <SheetBackground active={active}>
        <SheetContainer active={active}>
          <h1 onClick={closeModal}>Fechar</h1>
        </SheetContainer>
      </SheetBackground>
    </>
  );
};
