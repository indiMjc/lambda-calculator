import React from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

const Specials = () => {
  return (
    <div className="specials">
      {specials.map((btn, i) => (
        <SpecialButton key={i} button={btn} />
      ))}
    </div>
  );
};

export default Specials;
