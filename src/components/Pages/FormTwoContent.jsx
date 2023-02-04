import { MonthlyOrYearly, PlanField } from "../FormFields";
import { FormText } from "../Form";

//images:
import ARCADE from "../../assets/images/icon-arcade.svg";
import PRO from "../../assets/images/icon-pro.svg";
import ADVANCED from "../../assets/images/icon-advanced.svg";

const FormTwoContent = () => {
  return (
    <form className="text-design-MarineBlue text-left h-full w-full">
      <FormText
        title="Select you plan"
        text="You have the option of monthly or yearly billing."
      />
      <div className="md:grid md:grid-flow-col grid-cols-3 md:h-[40%] gap-4">
        <PlanField
          titletext="Arcade"
          src={ARCADE}
          text="$9/mo"
          text2="$90/yr"
        />
        <PlanField
          titletext="Advanced"
          src={ADVANCED}
          text="$12/mo"
          text2="$120/yr"
        />
        <PlanField titletext="Pro" src={PRO} text="$15/mo" text2="$150/yr" />
      </div>
      <MonthlyOrYearly />
    </form>
  );
};

export default FormTwoContent;
