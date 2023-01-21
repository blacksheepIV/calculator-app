import React from "react";
import "./Button.css";

type ButtonType = {
  className: string;
  value: string | number | React.ReactElement;
  onClick: () => void;
};

const Button: React.FC<ButtonType> = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;
