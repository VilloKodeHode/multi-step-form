import DesktopGuide, { MobileGuide } from "./Guide";
import FormDesktop, { FormMobile } from "./Form";
import Navigation from "./Navigation/Navigation";
import { useContext } from "react";
import PageIs from "./ContentChanger";

const Layout = () => {
  const { page } = useContext(PageIs);
  return (
    <>
      <div className="md:flex hidden">
        <div className="grid grid-cols-[1fr_2fr] grid-flow-col mx-auto xl:w-[900px] w-[95%] bg-white p-4 rounded-xl z-50 relative shadow-md animate-FormPopUp">
          <DesktopGuide />
          <FormDesktop />
        </div>
      </div>
      <div className="w-screen md:hidden flex">
        <MobileGuide />
        <FormMobile />
        {page !== "five" ? <Navigation /> : null}
      </div>
    </>
  );
};

export default Layout;
