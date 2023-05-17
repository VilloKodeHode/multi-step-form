import { FormText } from "../Form";
import InputField from "../FormFields";

const FormOneContent = () => {
  return (
    <form className="text-design-MarineBlue text-left h-full w-full">
      <fieldset>
        <FormText
          title="Personal info"
          text=" Please provide your name, email address, and phone number."
        />
        <div className="text-left text-design-MarineBlue font-medium">
          <InputField
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
            text="Name"
          />
          <InputField
            id="email"
            name="email"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            text="Email address"
          />
          <InputField
            id="tel"
            name="phone"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            text="Phone Number"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default FormOneContent;
