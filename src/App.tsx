import React from "react";
import { IconContext } from "react-icons";
import { RiDeleteBack2Line } from "react-icons/ri";
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import Button from "./components/Button";
import Keyboard from "./components/Keyboard";
import CalcProvider from "./context/CalcContext";
import { ButtonType } from "./components/Button/types";
import Header from "./components/Header";

const btnValues: ButtonType[][] = [
  [
    { value: "C", className: "clear" },
    { value: "(", className: "yellowish-actions" },
    { value: ")", className: "yellowish-actions" },
    { value: "x", className: "purplish-actions" }
  ],
  [
    { value: "√", className: "yellowish-actions" },
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
            color: "#517e9c"
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
  <CalcProvider>
    <Wrapper>
      <>
        <Header />
        <Screen />
        <Keyboard>
          {btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn?.className || ""}
                value={btn?.value}
              />
            );
          })}
        </Keyboard>
      </>
    </Wrapper>
  </CalcProvider>
);

export default App;
