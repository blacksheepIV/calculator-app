import React, { useContext } from "react";
import "./Button.css";
import { ButtonType } from "./types";
import { CalcContext } from "../../context/CalcContext";

const Button: React.FC<ButtonType> = ({ className, value, disabled }) => {
  const { calc, setCalc } = useContext(CalcContext);

  /** @description a function to handle number press on calculator's keyboard */
  function handleNumbers() {
    // console.log({ num: calc.num, value, calc });
    const insertedNumber: string =
      calc.num === "0" && value === 0
        ? "0"
        : calc.num === "0"
        ? `${value}`
        : `${calc.num}${value}`;

    setCalc({
      ...calc,
      //res: !calc.operation && calc.num === "0" ? insertedNumber : calc.res,
      // operation: !!calc.sign ? calc.operation + value : insertedNumber,
      res: !calc.sign ? "0" : calc.res,
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
      // operation: !!calc.sign
      //   ? !stringifiedCalcNumber.includes(".")
      //     ? calc.operation + value
      //     : calc.operation
      //   : resultOfFloatingPoint,
      num: resultOfFloatingPoint
    });
  }

  function onBasicOperationsClick() {
    setCalc({
      ...calc,
      sign: value as string,
      res: calc.res === "0" && calc.num ? calc.num : calc.res,
      //res: calc.res === "0" && calc.num ? calc.num : calc.res,
      // operation: !!calc.operation ? calc.operation + value : calc.res + value,
      num: "0"
    });
  }

  function invertClickHandler() {
    const previousResult = Number(calc.res);
    const previousNumber = Number(calc.num);
    const operationResult = previousResult ? previousResult * -1 : 0;

    setCalc({
      ...calc,
      res: operationResult.toString(),
      num: previousNumber ? `${Number(calc.num) * -1}` : "0",
      sign: ""
    });
  }

  function onPercentClick() {
    let num: number = Number(calc.num) ? parseFloat(calc.num) : 0;
    let res: number = Number(calc.res) ? parseFloat(calc.res) : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)).toString(),
      res: (res /= Math.pow(100, 1)).toString(),
      sign: ""
    });
  }

  function onSquareOperation() {
    let num: number = Number(calc.num);
    let res: number = Number(calc.res);

    setCalc({
      ...calc,
      num: (num = Math.sqrt(num)).toString(),
      res: (res = Math.sqrt(res)).toString(),
      sign: ""
    });
  }

  function onEqual() {
    const { sign, num, res } = calc;
    if (!!sign && num) {
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
        //operation: "",
        num: "0"
      });
    }
  }

  function onClear() {
    setCalc({ sign: "", num: "0", res: "0", operation: "" });
  }

  function handleClick(value: ButtonType["value"]) {
    if (disabled) return;
    const results: Record<string, () => void> = {
      C: onClear,
      "(": () => {},
      ")": () => {},
      x: onBasicOperationsClick,
      "√": onSquareOperation,
      "%": onPercentClick,
      "±": invertClickHandler,
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
