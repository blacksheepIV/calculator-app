import React from "react";
import "./Keyboard.css";
import { TfiArrowsVertical } from "react-icons/tfi";
import Switch from "../Switch";
import Button from "../Button";

type KeyboardProps = {
  children: React.ReactElement[];
};

const ButtonBox: React.FC<KeyboardProps> = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;
