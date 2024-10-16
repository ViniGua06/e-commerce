import halfStar from "../../../public/stars/half.star.svg";
import emptyStar from "../../../public/stars/empty.star.svg";
import fullStar from "../../../public/stars/full.star.svg";

export const Stars = ({ average }: { average: number }) => {
  console.log(average);
  return average >= 1 && average < 1.2 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average >= 1.2 && average <= 1.8 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={halfStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average > 1.8 && average < 2.2 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average >= 2.2 && average <= 2.8 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={halfStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average > 2.8 && average < 3.2 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average >= 3.2 && average <= 3.8 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={halfStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average > 3.8 && average < 4.2 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : average >= 4.2 && average <= 4.8 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={halfStar} height={"100%"} alt="" />
    </>
  ) : average > 4.8 ? (
    <>
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
      <img src={fullStar} height={"100%"} alt="" />
    </>
  ) : average < 1 ? (
    <>
      <img src={halfStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
      <img src={emptyStar} height={"100%"} alt="" />
    </>
  ) : null;
};
