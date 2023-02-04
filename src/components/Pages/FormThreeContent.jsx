import { AddOnField } from "../FormFields";
import { FormText } from "../Form";

//images:

const FormThreeContent = () => {
  return (
    <form className="text-design-MarineBlue text-left h-full w-full">
      <FormText
        title="Pick add-ons"
        text="Add-ons help enhance your gaming experience."
      />
      <fieldset>
        <AddOnField
          titletext="Online service"
          titletext2="Access to multiplayer games"
          text="+$1/mo"
          text2="+$10/mo"
        />
        <AddOnField
          titletext="Larger storage"
          titletext2="Extra 1TB of cloud save"
          text="+$2/mo"
          text2="+$20/mo"
        />
        <AddOnField
          titletext="Customizable profile"
          titletext2="Custom theme on your profile"
          text="+$2/mo"
          text2="+$20/mo"
        />
      </fieldset>
    </form>
  );
};

export default FormThreeContent;
