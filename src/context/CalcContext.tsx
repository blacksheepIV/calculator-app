import { createContext, useState } from "react";
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

  return (
    <CalcContext.Provider value={{ calc, setCalc }}>
      {children}
    </CalcContext.Provider>
  );
};

export default CalcProvider;
