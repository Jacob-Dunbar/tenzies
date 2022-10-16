import React from "react";

const Die = (props) => {
  return (
    <div className="die">
      <h1 className="die__value">{props.value}</h1>
    </div>
  );
};

export default Die;
