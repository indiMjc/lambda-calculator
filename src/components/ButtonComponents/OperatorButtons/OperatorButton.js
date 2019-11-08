import React from "react";

const OperatorButton = props => {
  return (
    <button
      onClick={() => {
        props.setDisplayState(props.button.char);
      }}
    >
      {props.button.char}
    </button>
  );
};

export default OperatorButton;
