import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";

const Specials = () => {
  const [specialState, setSpecialState] = useState(specials);
  return (
    <div>
      {specialState.map((btn, i) => (
        <SpecialButton key={i} button={btn} />
      ))}
    </div>
  );
};

export default Specials;
