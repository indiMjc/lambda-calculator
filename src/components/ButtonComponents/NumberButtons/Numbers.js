import React from "react";
import NumberButton from "./NumberButton";
import { numbers } from "../../../data";

const Numbers = props => {
  return (
    <div className="numbers">
      {numbers.map((btn, i) => (
        <NumberButton
          key={i}
          button={btn}
          setDisplayState={props.setDisplayState}
        />
      ))}
    </div>
  );
};

export default Numbers;
