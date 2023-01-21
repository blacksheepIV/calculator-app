import React from "react";
import "./Wrapper.css";

type WrapperProps = {
  children: React.ReactElement;
};
const Wrapper: React.FC<WrapperProps> = ({ children }) => (
  <div className="wrapper">{children}</div>
);

export default Wrapper;
