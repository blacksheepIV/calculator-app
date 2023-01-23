import { createContext, useState, useEffect } from "react";
import {
  CalcContextValueType,
  CalcProviderProps,
  InitialStateType
} from "./type";

export const CalcContext = createContext<CalcContextValueType>(
  {} as CalcContextValueType
);

const CalcProvider: React.FC<CalcProviderProps> = ({ children }) => {
  const [calc, setCalc] = useState<InitialStateType>({
    sign: "",
    num: "0",
    res: "0",
    operation: ""
  });

  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);
  return (
    <CalcContext.Provider value={{ calc, setCalc, darkMode, setDarkMode }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
