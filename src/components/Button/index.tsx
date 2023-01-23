import React, { useContext } from "react";
import "./Button.css";
import { ButtonType } from "./types";
import { CalcContext } from "../../context/CalcContext";

const Button: React.FC<ButtonType> = ({ className, value }) => {
  const { calc, setCalc } = useContext(CalcContext);

  /** @description a function to handle number press on calculato's keyboard */
  function handleNumbers() {
    console.log({ num: calc.num, value, calc });

    const insertedNumber: string =
      calc.num === "0" && value === 0
        ? "0"
        : calc.num === "0"
        ? `${value}`
        : `${calc.num}${value}`;

    setCalc({
      ...calc,
      res: !calc.operation && calc.num === "0" ? insertedNumber : calc.res,
      operation: !!calc.sign ? calc.operation + value : insertedNumber,
      num: insertedNumber
    });
  }
  function onCommaClick() {
    const stringifiedCalcNumber = calc.num.toString();
    const resultOfFloatingPoint = !stringifiedCalcNumber.includes(".")
      ? stringifiedCalcNumber + value.toString()
      : calc.num;
    setCalc({
      ...calc,
      operation: !!calc.sign
        ? !stringifiedCalcNumber.includes(".")
          ? calc.operation + value
          : calc.operation
        : resultOfFloatingPoint,
      num: resultOfFloatingPoint
    });
  }

  function onBasicOperationsClick() {
    console.log({ calc });
    setCalc({
      ...calc,
      sign: value as string,
      res: calc.res === "0" && calc.num ? calc.num : calc.res,
      operation: !!calc.operation ? calc.operation + value : calc.res + value,
      num: "0"
    });
  }

  function onEqual() {
    console.log({ calc });
    const { sign, num, res } = calc;
    if (!!sign && !!num) {
      const doTheMath = (a: number, b: number, sign: string) =>
        sign === "+"
          ? (a + b).toString()
          : sign === "-"
          ? (a - b).toString()
          : sign === "X"
          ? (a * b).toString()
          : (a / b).toString();

      const finalResult =
        num === "0" && sign === "/"
          ? "Can't divide with 0"
          : doTheMath(parseFloat(res), parseFloat(num), sign);

      setCalc({
        ...calc,
        res: finalResult,
        sign: "",
        operation: "",
        num: "0"
      });
    }
  }

  function onClear() {
    setCalc({ sign: "", num: "0", res: "0", operation: "" });
  }

  function handleClick(value: ButtonType["value"]) {
    const results: Record<string, () => void> = {
      C: onClear,
      "(": () => {},
      ")": () => {},
      x: onBasicOperationsClick,
      "√": () => {},
      "%": () => {},
      "±": () => {},
      "÷": onBasicOperationsClick,
      "-": onBasicOperationsClick,
      "+": onBasicOperationsClick,
      "=": onEqual,
      ".": onCommaClick
    };
    if (typeof value === "string" && Object.keys(results).includes(value)) {
      return results[value]();
    } else {
      return handleNumbers();
    }
  }
  return (
    <button className={className} onClick={() => handleClick(value)}>
      {value}
    </button>
  );
};

export default Button;
