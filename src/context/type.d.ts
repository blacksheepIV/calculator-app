export type InitialStateType = {
  sign: string;
  num: string;
  res: string;
  operation?: string;
};
export type CalcContextValueType = {
  calc: InitialStateType;
  setCalc: React.Dispatch<React.SetStateAction<InitialStateType>>;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export type CalcProviderProps = {
  children: React.ReactElement;
};
