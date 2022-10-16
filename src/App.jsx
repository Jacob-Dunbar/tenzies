import { useState, useEffect } from "react";
import "./style.css";
import Die from "./components/Die.jsx";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(allNewDice);

  const [endGame, setEndGame] = useState(false);

  useEffect(() => {
    const targetNumber = dice[0].value;
    const allHeld = dice.every((die) => die.isHeld);
    const allSame = dice.every((die) => die.value === targetNumber);
    if (allHeld && allSame) {
      setEndGame(true);
      console.log("You Won!");
    }
  }, [dice]);

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

  function roll() {
    setDice(
      dice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      })
    );
  }

  function holdDice(id) {
    setDice(
      dice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => (
    <Die
      id={die.id}
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));

  return (
    <div className="App">
      <main className="main">
        <h1 className="title">Tenzies</h1>
        <p className="instructions">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
        <div className="die__container">{diceElements}</div>
        <button onClick={roll}>Roll</button>
      </main>
    </div>
  );
}

export default App;
