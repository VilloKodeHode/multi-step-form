import LayoutOne, { LayoutFour, LayoutThree, LayoutTwo } from "./Layout";

const PageOne = () => {
  return <LayoutOne />;
};

export const PageTwo = () => {
  return <LayoutTwo />;
};

export const PageThree = () => {
  return <LayoutThree />;
};

export const PageFour = () => {
  return <LayoutFour />;
};

export default PageOne;
