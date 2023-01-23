import React from "react";
import "./Switch.css";
import classNames from "classnames";

type SwitchProps = {
  checked: boolean;
  onClick?: () => void;
  className?: string;
};

const Switch: React.FC<SwitchProps> = ({
  checked,
  className = "",
  onClick
}) => (
  <div className={classNames("switch__wrapper", className)}>
    <label className="switch">
      <input
        type="checkbox"
        key="checkbox"
        checked={checked}
        onChange={onClick}
      />
      <span className="slider round"></span>
    </label>
    <span className="switch__text">SWITCH TO DARK THEME</span>
  </div>
);

export default Switch;
