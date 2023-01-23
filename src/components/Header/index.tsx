import React from "react";
import Clock from "../Clock/index";
import { FaSignal } from "react-icons/fa";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import "./Header.css";

const Header: React.FC<{}> = () => (
  <div className="header">
    <Clock className="Header__clock" />
    <div className="header__icons">
      <FaSignal />
      <IoIosWifi />
      <IoIosBatteryFull size="1.2rem" />
    </div>
  </div>
);

export default Header;
