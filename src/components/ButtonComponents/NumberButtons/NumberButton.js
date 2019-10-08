import React from "react";

const NumberButton = props => {
  console.log(props);
  return (
    <>
      <button>{props.button}</button>
    </>
  );
};

export default NumberButton;
