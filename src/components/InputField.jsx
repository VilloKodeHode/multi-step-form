import ARCADE from "../assets/images/icon-arcade.svg";
import PRO from "../assets/images/icon-pro.svg";
import ADVANCED from "../assets/images/icon-advanced.svg";

const InputField = (props) => {
  const { id, name, placeholder, text, type } = props;
  return (
    <div>
      <label htmlFor={id} id={id} className="text-left text-xs">
        {text}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border rounded-md px-4 py-3"
        minLength="2"
        required
      />
    </div>
  );
};

export const PlanField = (props) => {
  const { titletext, text, src } = props;
  return (
    <label className="text-left text-xs">
      <div className="w-full border rounded-lg px-4 py-5 flex flex-row">
        <img src={src} className="mr-2" />
        <div className="flex flex-col">
          <p className="font-semibold">{titletext}</p>
          <p className="text-sm text-design-CoolGray">{text}</p>
        </div>
      </div>
    </label>
  );
};

// export const PlanFieldpropped = (props) => {
//   const { titletext, text, src } = props;
//   return (
//     <label className="text-left text-xs">
//       <div className="w-full border rounded-lg px-4 py-5 flex flex-row">
//         <img src={src} className="mr-2" />
//         <div className="flex flex-col">
//           <p className="font-semibold">{titletext}</p>
//           <p className="text-sm text-design-CoolGray">{text}</p>
//         </div>
//       </div>
//     </label>
//   );
// };

export default InputField;
