import DesktopGuide, { MobileGuide } from "./Guide";
import FormDesktop, { FormMobile } from "./Form";
import Navigation from "./Navigation/Navigation";

const LayoutOne = () => {
  return (
    <>
      <div className="md:flex hidden">
        <div className="grid grid-cols-[1fr_2fr] grid-flow-col m-auto bg-white h-full p-4 rounded-xl z-50 relative">
          <DesktopGuide />
          <FormDesktop />
        </div>
      </div>
      <div className="w-screen md:hidden flex">
        <MobileGuide />
        <FormMobile />
        <Navigation />
      </div>
    </>
  );
};

export const LayoutTwo = () => {
  return (
    <>
      <div className="md:flex hidden">
        <div className="grid grid-cols-[1fr_2fr] grid-flow-col m-auto bg-white h-full p-4 rounded-xl z-50">
          <DesktopGuide />
          <FormDesktop />
        </div>
      </div>
      <div className="w-screen md:hidden flex">
        <MobileGuide />
        <FormMobile />
        <Navigation />
      </div>
    </>
  );
};

export const LayoutThree = () => {
  return (
    <>
      <div className="md:flex hidden">
        <div className="grid grid-cols-[1fr_2fr] grid-flow-col m-auto bg-white h-full p-4 rounded-xl z-50">
          <DesktopGuide />
          <FormDesktop />
        </div>
      </div>
      <div className="w-screen md:hidden flex">
        <MobileGuide />
        <FormMobile />
        <Navigation />
      </div>
    </>
  );
};

export const LayoutFour = () => {
  return (
    <>
      <div className="md:flex hidden">
        <div className="grid grid-cols-[1fr_2fr] grid-flow-col m-auto bg-white h-full p-4 rounded-xl z-50">
          <DesktopGuide />
          <FormDesktop />
        </div>
      </div>
      <div className="w-screen md:hidden flex">
        <MobileGuide />
        <FormMobile />
        <Navigation />
      </div>
    </>
  );
};

export default LayoutOne;
