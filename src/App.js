import React from "react";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Specials />
        <Operators />
        <Numbers />
      </div>
    </div>
  );
}

export default App;
