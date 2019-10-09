import React from "react";

const NumberButton = props => {
  return (
    <button
      onClick={() => {
        props.setDisplayState(props.button);
      }}
    >
      {props.button}
    </button>
  );
};

export default NumberButton;
