import React from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

const Specials = props => {
  return (
    <div className="specials">
      {specials.map((btn, i) => (
        <SpecialButton
          key={i}
          button={btn}
          setDisplayState={props.setDisplayState}
        />
      ))}
    </div>
  );
};

export default Specials;
