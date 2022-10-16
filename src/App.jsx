import { useState } from "react";
import "./style.css";
import Die from "./components/Die.jsx";
import { nanoid } from "nanoid";

/**
 * Challenge: Update the array of numbers in state to be
 * an array of objects instead. Each object should look like:
 * { value: <random number>, isHeld: false }
 *
 * Making this change will break parts of our code, so make
 * sure to update things so we're back to a working state
 */

function App() {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push({
        value: Math.ceil(Math.random() * 6),
        isHeld: false,
        id: nanoid(),
      });
    }
    return diceArray;
  }

  const diceElements = dice.map((die) => (
    <Die key={die.id} value={die.value} />
  ));

  function roll() {
    setDice(allNewDice);
  }

  return (
    <div className="App">
      <main className="main">
        <div className="die__container">{diceElements}</div>
        <button onClick={roll}>Roll</button>
      </main>
    </div>
  );
}

export default App;
