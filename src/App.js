import React, { useState } from "react";
import Display from "./components/DisplayComponents/Display";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers";
import "./App.css";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [displayState, setDisplayState] = useState(0);
  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display displayState={displayState} />
        <Specials />
        <Operators />
        <Numbers setDisplayState={setDisplayState} />
      </div>
    </div>
  );
}

export default App;
