import { SliderChoice, AddOnChoice, PlanChoice } from "./ContentChanger";
import { useContext } from "react";
import { Link } from "react-router-dom";
import PageIs from "./ContentChanger";

const PlanPrice = () => {
  const { setPage } = useContext(PageIs);
  const { toggle } = useContext(SliderChoice);
  const { plan } = useContext(PlanChoice);

  let currentPlan;

  Object.keys(plan).forEach((planKey) => {
    if (plan[planKey]) {
      currentPlan = planKey;
    }
  });
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex flex-col">
        <p className="font-[500]">
          {currentPlan} {toggle ? "Monthly" : "Yearly"}
        </p>
        <Link
          className="underline"
          onClick={() => {
            setPage("two");
          }}
          to="/steptwo"
        >
          Change
        </Link>
      </div>
      <div className="font-[500]">
        <p>{currentPlan === "Arcade" ? (toggle ? "$9/mo" : "$90/yr") : null}</p>
        <p>
          {currentPlan === "Advanced" ? (toggle ? "$12/mo" : "$120/yr") : null}
        </p>
        <p>{currentPlan === "Pro" ? (toggle ? "$15/mo" : "$150/yr") : null}</p>
      </div>
    </div>
  );
};

export const AddonPrice = () => {
  const { toggle } = useContext(SliderChoice);
  const { addon } = useContext(AddOnChoice);

  return (
    <div>
      {addon["Customizable profile"] && (
        <div className="flex flex-row justify-between items-center">
          <p className="text-design-CoolGray">Customizable profile</p>
          <p>{toggle ? "+$1/mo" : "+$10/yr"}</p>
        </div>
      )}
      {addon["Larger storage"] && (
        <div className="flex flex-row justify-between items-center">
          <p className="text-design-CoolGray">Larger storage</p>
          <p>{toggle ? "+$2/mo" : "+$20/yr"}</p>
        </div>
      )}
      {addon["Online service"] && (
        <div className="flex flex-row justify-between items-center">
          <p className="text-design-CoolGray">Online service</p>
          <p>{toggle ? "+$2/mo" : "+$20/yr"}</p>
        </div>
      )}
    </div>
  );
};

export const Total = () => {
  const { toggle } = useContext(SliderChoice);
  const { addon } = useContext(AddOnChoice);
  const { plan } = useContext(PlanChoice);

  let currentPlan;

  Object.keys(plan).forEach((planKey) => {
    if (plan[planKey]) {
      currentPlan = planKey;
    }
  });

  const calculatePrice = () => {
    let price = 0;
    if (currentPlan === "Arcade") {
      price += toggle ? 9 : 90;
    } else if (currentPlan === "Advanced") {
      price += toggle ? 12 : 120;
    } else if (currentPlan === "Pro") {
      price += toggle ? 15 : 150;
    }

    if (addon["Customizable profile"]) {
      price += toggle ? 1 : 10;
    }
    if (addon["Larger storage"]) {
      price += toggle ? 2 : 20;
    }
    if (addon["Online service"]) {
      price += toggle ? 2 : 20;
    }

    return price;
  };

  return (
    <div className="flex flex-row justify-between p-4 mt-4">
      <p className="text-design-CoolGray">
        Total (per {toggle ? "month" : "year"})
      </p>
      <p className="text-design-PurplishBlue font-[700]">
        ${calculatePrice()}
        {toggle ? "/mo" : "/yr"}
      </p>
    </div>
  );
};
export default PlanPrice;
