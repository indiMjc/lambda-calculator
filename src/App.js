import React, { useState } from "react";
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [currentVal, inputVal, setCurrentVal] = useState(0);
  const divide = function() {
    setCurrentVal(currentVal => currentVal / inputVal);
  };
  const multiply = function() {
    setCurrentVal(currentVal => currentVal * inputVal);
  };
  const subtract = function() {
    setCurrentVal(currentVal => currentVal - inputVal);
  };
  const add = function() {
    setCurrentVal(currentVal => currentVal + inputVal);
  };
  return (
    <div className="container">
      <Logo />
      <Display displayVal={currentVal} />
      <div className="App">
        <Specials />
        <Operators />
        <Numbers operations={[divide, multiply, subtract, add]} />
      </div>
    </div>
  );
}

export default App;
