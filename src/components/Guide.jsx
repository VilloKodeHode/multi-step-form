import BGDESKTOP from "../assets/images/bg-sidebar-desktop.svg";
import BGMOBILE from "../assets/images/bg-sidebar-mobile.svg";
import PageIs from "./ContentChanger";
import { useContext } from "react";

const DesktopGuide = () => {
  return (
    <>
      <div className="relative">
        <img src={BGDESKTOP} className="" />
        <div className="absolute top-4 left-4">
          <Steps />
        </div>
      </div>
    </>
  );
};

export const MobileGuide = () => {
  return (
    <>
      <div className="absolute top-0 w-screen">
        <div className="relative">
          <div className="absolute translate-y-[40%] bg-design-BG h-96 w-screen z-50" />
          <picture className="absolute left-0">
            <img src={BGMOBILE} className="w-screen" />
          </picture>
          <div className="absolute left-1/2 top-7 -translate-x-1/2">
            <Steps />
          </div>
        </div>
      </div>
    </>
  );
};

export const GuideStepButton = (props) => {
  const { number, text } = props;
  return (
    <div className="grid grid-flow-col w-fit gap-3">
      <div className="relative rounded-full h-10 w-10 items-center font-semibold bg-design-PurplishBlue text-design-MarineBlue">
        <p className="absolute top-1/2 translate-x-1/2 right-1/2 -translate-y-1/2">
          {number}
        </p>
      </div>
      <div className="md:block hidden">
        <p className="text-design-CoolGray text-left">Step {number}</p>
        <p className="font-semibold text-design-LightBlue text-left">{text}</p>
      </div>
    </div>
  );
};

export const InactiveGuideStepButton = (props) => {
  const { number, text } = props;
  return (
    <div className="grid grid-flow-col w-fit gap-3">
      <div className="relative rounded-full h-10 w-10 items-center border-2 text-design-white font-semibold border-design-LightGray">
        <p className="absolute top-1/2 translate-x-1/2 right-1/2 -translate-y-1/2">
          {number}
        </p>
      </div>
      <div className="md:block hidden">
        <p className="text-design-CoolGray text-left">Step {number}</p>
        <p className="font-semibold text-design-LightBlue text-left">{text}</p>
      </div>
    </div>
  );
};

export const Steps = () => {
  const { page } = useContext(PageIs);
  return (
    <div className="grid grid-flow-col gap-4">
      {page === "one" ? (
        <GuideStepButton number="1" text="YOUR INFO" />
      ) : (
        <InactiveGuideStepButton number="1" text="YOUR INFO" />
      )}
      {page === "two" ? (
        <GuideStepButton number="2" text="SELECT PLAN" />
      ) : (
        <InactiveGuideStepButton number="2" text="SELECT PLAN" />
      )}
      {page === "three" ? (
        <GuideStepButton number="3" text="ADD-ONS" />
      ) : (
        <InactiveGuideStepButton number="3" text="ADD-ONS" />
      )}
      {page === "four" ? (
        <GuideStepButton number="4" text="SUMMERY" />
      ) : (
        <InactiveGuideStepButton number="4" text="SUMMERY" />
      )}
    </div>
  );
};

export default DesktopGuide;
