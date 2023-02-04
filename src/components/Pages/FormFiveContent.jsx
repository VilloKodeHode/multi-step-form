import { FormText } from "../Form";
import THANKYOU from "../../assets/images/icon-thank-you.svg";

//images:

const FormFiveContent = () => {
  return (
    <form className="text-design-MarineBlue text-center flex flex-col justify-center h-full w-full py-8">
      <img src={THANKYOU} className="h-16 m-6" />
      <FormText
        title="Thank you!"
        text="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com."
      />
    </form>
  );
};

export default FormFiveContent;
