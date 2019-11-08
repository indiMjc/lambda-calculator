import React from "react";
import OperatorButton from "./OperatorButton";
import { operators } from "../../../data";

const Operators = props => {
  return (
    <div className="operators">
      <div className="operator-btns">
        {operators.map((btn, i) => (
          <OperatorButton
            key={i}
            button={btn}
            setDisplayState={props.setDisplayState}
          />
        ))}
      </div>
    </div>
  );
};

export default Operators;
