import FormOneContent from "./PageOne/FormOneContent";
import PageIs from "./ContentChanger";
import { useContext } from "react";
import FormTwoContent from "./PageTwo/FormTwoContent";
import Navigation from "./Navigation/Navigation";
import FormThreeContent from "./PageThree/FormThreeContent";
import FormFourContent from "./PageFour/FormFourContent";

const FormDesktop = () => {
  const { page } = useContext(PageIs);
  return (
    <div className="flex flex-col justify-center mx-12 my-4 items-center relative left-0 rounded-lg ">
      {page === "one" ? <FormOneContent /> : null}
      {page === "two" ? <FormTwoContent /> : null}
      {page === "three" ? <FormThreeContent /> : null}
      {page === "four" ? <FormFourContent /> : null}
      <Navigation />
    </div>
  );
};

export const FormMobile = () => {
  const { page } = useContext(PageIs);
  return (
    <div className="flex flex-col justify-center my-8 items-center w-[92%] bg-white left-1/2 -translate-x-1/2 p-8 absolute top-16 rounded-lg z-50">
      {page === "one" ? <FormOneContent /> : null}
      {page === "two" ? <FormTwoContent /> : null}
      {page === "three" ? <FormThreeContent /> : null}
      {page === "four" ? <FormFourContent /> : null}
    </div>
  );
};

export const FormText = (props) => {
  const { title, text } = props;
  return (
    <div>
      <div className="text-design-MarineBlue text-2xl font-semibold">
        {title}
      </div>
      <p className="text-design-CoolGray my-2">{text}</p>
    </div>
  );
};

export default FormDesktop;
