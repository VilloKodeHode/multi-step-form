import { FormText } from "../Form";
import { SummeryField } from "../FormFields";

//images:

const FormFourContent = () => {
  return (
    <form className="text-design-MarineBlue text-left h-full w-full">
      <FormText
        title="Finishing up"
        text="Double-check everything looks OK before confirming"
      />
      <SummeryField />
    </form>
  );
};

export default FormFourContent;
