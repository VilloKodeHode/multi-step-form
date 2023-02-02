import BGDESKTOP from "../assets/images/bg-sidebar-desktop.svg";
import BGMOBILE from "../assets/images/bg-sidebar-mobile.svg";
import DesktopGuide, { MobileGuide } from "./Guide";
import FormDesktop, { FormMobile, NextStep } from "./Form";

const LayoutOne = () => {
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
        <NextStep />
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
      </div>
    </>
  );
};

export default LayoutOne;
