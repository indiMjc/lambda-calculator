import React from "react";

const SpecialButton = props => {
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

export default SpecialButton;
