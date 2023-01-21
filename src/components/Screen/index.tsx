import React from "react";
import "./Screen.css";

type ScreenProps = {
  value: string;
};
const Screen: React.FC<ScreenProps> = ({ value = "oops" }) => (
  <div className="calculator__screen">{value}</div>
);

export default Screen;
