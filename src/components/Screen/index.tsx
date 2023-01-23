import React, { useContext } from "react";
import "./Screen.css";
import { CalcContext } from "../../context/CalcContext";

// type ScreenProps = {
//   value: string;
// };
const Screen: React.FC<{}> = () => {
  const { calc } = useContext(CalcContext);
  return (
    <div className="calculator__screen">
      {!!calc.operation ? calc.operation : calc.res}
    </div>
  );
};

export default Screen;
