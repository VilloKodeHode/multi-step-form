import { FormText } from "../Form";
import THANKYOU from "../../assets/images/icon-thank-you.svg";
import { useContext } from "react";
import { PersonalInfo } from "../ContentChanger";

//images:

const FormFiveContent = () => {
  const { personalInfo } = useContext(PersonalInfo);
  return (
    <form className="text-design-MarineBlue text-center flex flex-col justify-center h-full w-full py-8">
      <img src={THANKYOU} className="h-16 m-6" />
      <FormText
        title={`Thank you, ${personalInfo.name}!`}
        text={`Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at service@epicservice.com. You will soon get a confirmation email to ${personalInfo.email}`}
      />
    </form>
  );
};

export default FormFiveContent;
