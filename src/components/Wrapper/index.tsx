import React, { useContext } from "react";
import Header from "../Header";
import AdvancedFeatures from "../AdvancedFeatures";
import Screen from "../Screen";
import Button from "../Button";
import Keyboard from "../Keyboard";
import { IconContext } from "react-icons";
import { RiDeleteBack2Line } from "react-icons/ri";
import classNames from "classnames";
import { CalcContext } from "../../context/CalcContext";

import "./Wrapper.css";
import type { ButtonType } from "../Button/types";

const Wrapper: React.FC<{}> = () => {
  const { darkMode } = useContext(CalcContext);

  const btnValues: ButtonType[][] = [
    [
      { value: "C", className: darkMode ? "clear--dark" : "clear" },
      {
        value: "(",
        className: darkMode ? "yellowish-actions--dark" : "yellowish-actions"
      },
      {
        value: ")",
        className: darkMode ? "yellowish-actions--dark" : "yellowish-actions"
      },
      {
        value: "x",
        className: darkMode ? "purplish-actions--dark" : "purplish-actions"
      }
    ],
    [
      {
        value: "√",
        className: darkMode ? "yellowish-actions--dark" : "yellowish-actions"
      },
      {
        value: "%",
        className: darkMode ? "yellowish-actions--dark" : "yellowish-actions"
      },
      {
        value: "±",
        className: darkMode ? "yellowish-actions--dark" : "yellowish-actions"
      },
      {
        value: "÷",
        className: darkMode ? "purplish-actions--dark" : "purplish-actions"
      }
    ],
    [
      { value: 7, className: darkMode ? "button--dark" : "" },
      { value: 8, className: darkMode ? "button--dark" : "" },
      { value: 9, className: darkMode ? "button--dark" : "" },
      {
        value: "-",
        className: darkMode ? "purplish-actions--dark" : "purplish-actions"
      }
    ],
    [
      { value: 4, className: darkMode ? "button--dark" : "" },
      { value: 5, className: darkMode ? "button--dark" : "" },
      { value: 6, className: darkMode ? "button--dark" : "" },
      {
        value: "+",
        className: darkMode ? "purplish-actions--dark" : "purplish-actions"
      }
    ],
    [
      { value: 1, className: darkMode ? "button--dark" : "" },
      { value: 2, className: darkMode ? "button--dark" : "" },
      { value: 3, className: darkMode ? "button--dark" : "" },
      { value: "=", className: darkMode ? "equal--dark" : "equal" }
    ],
    [
      { value: ".", className: darkMode ? "button--dark" : "" },
      { value: 0, className: darkMode ? "button--dark" : "" },
      {
        value: (
          <IconContext.Provider
            value={{
              style: { verticalAlign: "middle" },
              size: "1.4em",
              color: darkMode ? "#a5afac" : "#517e9c"
            }}
          >
            <RiDeleteBack2Line />
          </IconContext.Provider>
        ),
        className: darkMode ? "erase--dark" : "erase"
      }
    ]
  ];

  return (
    <div
      className={classNames(
        "wrapper",
        { "wrapper--light": !darkMode },
        { "wrapper--dark": darkMode }
      )}
    >
      <>
        <Header />
        <Screen />
        <AdvancedFeatures />
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
    </div>
  );
};

export default Wrapper;
