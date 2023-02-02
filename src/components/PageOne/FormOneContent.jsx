import InputField from "../InputField";

const FormOneContent = () => {
  return (
    <form className="text-design-MarineBlue text-left h-full w-full">
      <fieldset>
        <div>
          <div className="text-design-MarineBlue text-2xl font-semibold">
            Personal info
          </div>
          <p className="text-design-CoolGray my-2">
            Please provide your name, email address, and phone number.
          </p>
        </div>
        <div className="text-left text-design-MarineBlue font-medium">
          <InputField
            id="name"
            name="name"
            type="text"
            placeholder="e.g. Stephen King"
            text="Name"
          />
          <InputField
            id="e-mail"
            name="e-mail"
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
