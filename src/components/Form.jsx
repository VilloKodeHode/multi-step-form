import FormOneContent from "./Pages/FormOneContent";
import PageIs from "./ContentChanger";
import { useContext } from "react";
import FormTwoContent from "./Pages/FormTwoContent";
import Navigation from "./Navigation/Navigation";
import FormThreeContent from "./Pages/FormThreeContent";
import FormFourContent from "./Pages/FormFourContent";
import FormFiveContent from "./Pages/FormFiveContent";

const FormDesktop = () => {
  const { page } = useContext(PageIs);
  return (
    <div className="flex flex-col justify-center mx-12 my-4 items-center relative rounded-lg">
      {page === "one" ? <FormOneContent /> : null}
      {page === "two" ? <FormTwoContent /> : null}
      {page === "three" ? <FormThreeContent /> : null}
      {page === "four" ? <FormFourContent /> : null}
      {page === "five" ? <FormFiveContent /> : null}
      {page !== "five" ? <Navigation /> : null}
    </div>
  );
};

export const FormMobile = () => {
  const { page } = useContext(PageIs);
  return (
    <div className="flex flex-col justify-center my-8 items-center w-[92%] bg-white left-1/2 -translate-x-1/2 p-6 absolute top-16 rounded-lg z-50 shadow-md">
      {page === "one" ? <FormOneContent /> : null}
      {page === "two" ? <FormTwoContent /> : null}
      {page === "three" ? <FormThreeContent /> : null}
      {page === "four" ? <FormFourContent /> : null}
      {page === "five" ? <FormFiveContent /> : null}
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
      <p className="text-design-CoolGray text-sm my-2">{text}</p>
    </div>
  );
};

export default FormDesktop;
