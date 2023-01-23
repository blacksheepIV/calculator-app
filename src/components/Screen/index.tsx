import React, { useContext } from "react";
import "./Screen.css";
import { CalcContext } from "../../context/CalcContext";
import useFitText from "use-fit-text";

const Screen: React.FC<{}> = () => {
  const { calc } = useContext(CalcContext);
  const { fontSize, ref } = useFitText();

  return (
    <div className="calculator__screen">
      <div
        ref={ref}
        style={{ fontSize, height: 80, width: 300, whiteSpace: "normal" }}
      >
        {Number(calc.num) ? calc.num : calc.res}
      </div>
    </div>
  );
};

export default Screen;
