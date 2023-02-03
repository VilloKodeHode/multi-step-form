import { useState, useContext } from "react";
import CHECKMARK from "../assets/images/icon-checkmark.svg";
import { SliderChoice } from "./ContentChanger";

const InputField = (props) => {
  const { id, name, placeholder, text, type } = props;
  return (
    <div>
      <label htmlFor={id} id={id} className="text-left text-xs">
        {text}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-[4px] px-4 py-2"
        minLength="2"
        required
      />
    </div>
  );
};

export const PlanField = (props) => {
  const { titletext, text, text2, src } = props;
  const { toggle } = useContext(SliderChoice);
  return (
    <label className="text-left text-xs">
      <div className="w-full md:h-full border rounded-lg px-4 py-5 flex md:flex-col items-start md:justify-between flex-row my-3">
        <img src={src} className="mr-2 h-12" />
        <div className="flex flex-col gap-1">
          <p className="font-semibold">{titletext}</p>
          <p className="text-sm text-design-CoolGray">
            {toggle ? text : text2}
          </p>
          {toggle === false && <p className="font-semibold">2 months free</p>}
        </div>
      </div>
    </label>
  );
};

export const MonthlyOrYearly = () => {
  const { toggle, setToggle } = useContext(SliderChoice);
  return (
    <div className=" bg-design-BG gap-4 font-semibold flex justify-center py-4 md:my-12 mt-6 rounded-lg">
      {toggle === true && (
        <span className="text-design-MarineBlue">Monthly</span>
      )}
      {toggle === false && (
        <span className="text-design-CoolGray">Monthly</span>
      )}
      <label className="switch">
        <input type="checkbox" onClick={() => setToggle(!toggle)} />
        <span className="slider round"></span>
      </label>
      {toggle === true && <span className="text-design-CoolGray">Yearly</span>}
      {toggle === false && (
        <span className="text-design-MarineBlue">Yearly</span>
      )}
    </div>
  );
};

export const AddOnField = (props) => {
  const { titletext, titletext2, text, text2 } = props;
  const { toggle } = useContext(SliderChoice);
  return (
    <label className="text-left text-xs">
      <div className="w-full h-16 border items-center rounded-lg px-4 gap-4 flex flex-row my-3">
        <div className="">
          <label className="container">
            <input type="checkbox" className="" />
            <span className="checkmark h-6 w-6 rounded-md border flex p-[5px]">
              <img src={CHECKMARK} />
            </span>
          </label>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <div>
            <p className="font-semibold">{titletext}</p>
            <p className="text-[12px] text-design-CoolGray">{titletext2}</p>
          </div>
          <p className="text-sm font-[500] text-design-PurplishBlue">
            {toggle ? text : text2}
          </p>
        </div>
      </div>
    </label>
  );
};

export default InputField;
