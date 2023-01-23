import React from "react";
import Wrapper from "./components/Wrapper";
import CalcProvider from "./context/CalcContext";

const App: React.FC = () => (
  <CalcProvider>
    <Wrapper />
  </CalcProvider>
);

export default App;
