import InputField, { PlanField, PlanFieldpropped } from "../InputField";
import ARCADE from "../../assets/images/icon-arcade.svg";
import PRO from "../../assets/images/icon-pro.svg";
import ADVANCED from "../../assets/images/icon-advanced.svg";

const FormTwoContent = () => {
  return (
    <form className="text-design-MarineBlue text-left h-full w-full">
      <PlanField titletext="Arcade" src={ARCADE} text="$9/mo" />
    </form>
  );
};

export default FormTwoContent;
