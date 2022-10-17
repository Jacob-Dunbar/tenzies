import React from "react";

const Paragraph = (props) => {
  if (props.endGame) {
    return (
      <div className="instructions">
        <p className="result__moves">In {props.numOfRolls} moves.</p>

        <p className="result__high">
          {props.highScore === props.numOfRolls
            ? "NEW BEST!"
            : `Your best is ${props.highScore}`}
        </p>
      </div>
    );
  } else {
    return (
      <div className="instructions">
        <p>
          Roll until all dice are the same. Click each die to freeze it at it's
          current value between rolls.
        </p>
      </div>
    );
  }
};

export default Paragraph;
