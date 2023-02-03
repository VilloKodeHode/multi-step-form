import NextStep, { GoBack } from "./NavButtons";

const Navigation = () => {
  return (
    <>
      <div className="absolute md:hidden bottom-0 left-0 md:bg-none bg-white w-screen h-20 z-50" />
      <NextStep />
      <GoBack />
    </>
  );
};

export default Navigation;
