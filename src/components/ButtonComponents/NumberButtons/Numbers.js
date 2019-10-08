import React, { useState } from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = () => {
  const [numberState, setNumberState] = useState(numbers);
  return (
    <div>
      {numberState.map((btn, i) => (
        <NumberButton key={i} button={btn} />
      ))}
    </div>
  );
};

export default Numbers;
