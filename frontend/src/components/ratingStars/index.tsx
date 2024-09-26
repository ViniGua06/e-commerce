import halfStar from "../../../public/stars/half.star.svg";
import emptyStar from "../../../public/stars/empty.star.svg";
import fullStar from "../../../public/stars/full.star.svg";

export const Stars = ({ average }: { average: number }) => {
  return average == 1 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average == 1.5 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={halfStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average == 2 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average == 2.5 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={halfStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average == 3 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average == 3.5 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={halfStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average == 4 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average == 4.5 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={halfStar} height={"100%"} alt="" />
    </>
  ) : average == 2 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
    </>
  ) : null;
};
