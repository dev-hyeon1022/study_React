import React from "react";
import Item from "./Item";

const Items = ({ isEnter, onMouseOverToEnter, onMouseOutToLeave }) => {
  console.log("Items", isEnter);
  return (
    <ul>
      <Item isEnter={isEnter} onMouseOverToEnter={onMouseOverToEnter} onMouseOutToLeave={onMouseOutToLeave} />
    </ul>
  );
};

export default Items;
