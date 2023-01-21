import React from "react";

type ScreenProps = {
  value: string;
};
const Screen: React.FC<ScreenProps> = ({ value = "oops" }) => (
  <span className="calculator__screen">{value}</span>
);

export default Screen;
