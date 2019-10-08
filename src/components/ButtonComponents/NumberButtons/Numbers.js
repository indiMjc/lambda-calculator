import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = props => {
  console.log(props.operations.divide);
  // const [numberState, setNumberState] = useState(numbers);
  // const [operation, setOperation] = useState(0);
  return (
    <div className="numbers">
      {numbers.map((btn, i) => (
        <NumberButton key={i} button={btn} />
      ))}
    </div>
  );
};

export default Numbers;
