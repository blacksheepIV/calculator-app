import React, { useContext } from "react";
import Clock from "../Clock/index";
import { FaSignal } from "react-icons/fa";
import { IoIosBatteryFull, IoIosWifi } from "react-icons/io";
import { IconContext } from "react-icons";
import "./Header.css";
import { CalcContext } from "../../context/CalcContext";
import classNames from "classnames";

const Header: React.FC<{}> = () => {
  const { darkMode } = useContext(CalcContext);
  return (
    <div className="header">
      <Clock
        className={classNames("Header__clock", {
          "header__clock--dark": darkMode
        })}
      />
      <div className="header__icons">
        <IconContext.Provider
          value={{
            style: { verticalAlign: "middle" },

            color: darkMode ? "#fff" : "#000"
          }}
        >
          <FaSignal />

          <IoIosWifi />

          <IoIosBatteryFull size="1.2rem" />
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Header;
