import React from "react";
import "./Keyboard.css";

type KeyboardProps = {
  children: React.ReactElement[];
};

const ButtonBox: React.FC<KeyboardProps> = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;
