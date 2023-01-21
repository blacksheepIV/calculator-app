import React from "react";
import { IconContext } from "react-icons";
import { RiDeleteBack2Line } from "react-icons/ri";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import Button from "./components/Button";
import Keyboard from "./components/Keyboard";

type ButtonValue = {
  value: number | string | React.ReactElement;
  className: string;
};
const btnValues: ButtonValue[][] = [
  [
    { value: "C", className: "clear" },
    { value: "(", className: "yellowish-actions" },
    { value: ")", className: "yellowish-actions" },
    { value: "x", className: "purplish-actions" }
  ],
  [
    { value: "√ ", className: "yellowish-actions" },
    { value: "%", className: "yellowish-actions" },
    { value: "±", className: "yellowish-actions" },
    { value: "÷", className: "purplish-actions" }
  ],
  [
    { value: 7, className: "" },
    { value: 8, className: "" },
    { value: 9, className: "" },
    { value: "-", className: "purplish-actions" }
  ],
  [
    { value: 4, className: "" },
    { value: 5, className: "" },
    { value: 6, className: "" },
    { value: "+", className: "purplish-actions" }
  ],
  [
    { value: 1, className: "" },
    { value: 2, className: "" },
    { value: 3, className: "" },
    { value: "=", className: "equal" }
  ],
  [
    { value: ".", className: "" },
    { value: 0, className: "" },
    {
      value: (
        <IconContext.Provider
          value={{
            style: { verticalAlign: "middle" },
            size: "1.4em",
            color: "#5d5661"
          }}
        >
          <RiDeleteBack2Line />
        </IconContext.Provider>
      ),
      className: "erase"
    }
  ]
];
const App: React.FC = () => (
  <Wrapper>
    <>
      <Screen value="0" />
      <Keyboard>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn?.className || ""}
              value={btn?.value}
              onClick={() => {
                console.log(`${btn.value} clicked!`);
              }}
            />
          );
        })}
      </Keyboard>
    </>
  </Wrapper>
);

export default App;
