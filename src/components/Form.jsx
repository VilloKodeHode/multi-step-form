import FormOneContent from "./PageOne/FormOneContent";
import PageIs from "./ContentChanger";
import { Link } from "react-router-dom";
import { useContext } from "react";
import FormTwoContent from "./PageTwo/FormTwoContent";

export const NextStep = () => {
  const { page, setPage } = useContext(PageIs);
  return (
    <>
      <div className="absolute md:hidden bottom-0 left-0 bg-white w-screen h-20 z-50" />
      <button
        // onClick={() => {
        //   setPage("two");
        //   console.log(page);
        // }}
        className="absolute md:hidden md:bottom-0 bottom-4 md:right-0 right-4 rounded-md py-3 px-4 h-fit w-fit bg-design-MarineBlue text-design-LightBlue z-50"
      >
        <Link
          onClick={() => {
            setPage("two");
            console.log(page);
          }}
          to="/steptwo"
        >
          Next step
        </Link>
      </button>
    </>
  );
};

const FormDesktop = () => {
  const { page } = useContext(PageIs);
  return (
    <div className="flex flex-col justify-center mx-12 my-4 items-center relative left-0 rounded-lg ">
      {page === "one" ? <FormOneContent /> : null}
      {page === "two" ? <FormTwoContent /> : null}
      <button className="absolute  bottom-0  right-0  rounded-md py-3 px-4 h-fit w-fit bg-design-MarineBlue text-design-LightBlue">
        Next Step
      </button>
    </div>
  );
};

export const FormMobile = () => {
  const { page } = useContext(PageIs);
  return (
    <div className="flex flex-col justify-center my-8 items-center w-[90%] bg-white left-1/2 -translate-x-1/2 p-8 absolute top-16 rounded-lg z-50">
      {page === "one" ? <FormOneContent /> : null}
      {page === "two" ? <FormTwoContent /> : null}
    </div>
  );
};

export default FormDesktop;
