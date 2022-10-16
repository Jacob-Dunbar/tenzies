import React from "react";

const Die = (props) => {
  return (
    <div
      className="die"
      onClick={props.holdDice}
      style={{
        backgroundColor: props.isHeld === true ? "#59E391" : "#FFFFFF",
      }}
    >
      <h1 className="die__value">{props.value}</h1>
    </div>
  );
};

export default Die;
