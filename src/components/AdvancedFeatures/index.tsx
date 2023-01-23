import React, { useContext } from "react";
import { TfiArrowsVertical } from "react-icons/tfi";
import { CalcContext } from "../../context/CalcContext";
import Button from "../Button";
import Switch from "../Switch";
import "./AdvancedFeatures.css";
import classNames from "classnames";

const AdvancedFeatures: React.FC<{}> = () => {
  const { darkMode, setDarkMode } = useContext(CalcContext);
  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: "10px"
      }}
    >
      <Switch
        className="calculator__switch"
        checked={darkMode}
        onClick={toggleDarkMode}
      />
      <Button
        key="dummy_btn"
        disabled={true}
        className={classNames("button--dummy", { "button--dark": darkMode })}
        value={<TfiArrowsVertical size="1.3rem" />}
      />
    </div>
  );
};

export default AdvancedFeatures;
