import { useContext } from "react";
import PageIs from "../ContentChanger";
import { Link } from "react-router-dom";

const NextStep = () => {
  const { page, setPage } = useContext(PageIs);
  return (
    <button
      onClick={() => {
        setPage(
          page === "one"
            ? "two"
            : page === "two"
            ? "three"
            : page === "three"
            ? "four"
            : "five"
        );
      }}
      type="submit"
      className="absolute md:bottom-0 bottom-4 md:right-0 right-4 rounded-lg py-3 px-6 h-fit w-fit bg-design-MarineBlue text-design-Alabaster z-50"
    >
      Next step
    </button>
  );
};

export const GoBack = () => {
  const { page, setPage } = useContext(PageIs);
  return (
    <>
      {page !== "one" ? (
        <button
          onClick={() => {
            setPage(
              page === "two"
                ? "one"
                : page === "three"
                ? "two"
                : page === "four"
                ? "three"
                : null
            );
          }}
          className="absolute font-[500] md:bottom-0 bottom-4 md:left-0  left-4 rounded-md py-3 px-4 h-fit w-fit text-design-CoolGray z-50"
        >
          Go back
        </button>
      ) : null}
    </>
  );
};

export default NextStep;
