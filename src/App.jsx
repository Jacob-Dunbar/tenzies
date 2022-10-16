import { useState } from "react";
import "./style.css";
import Die from "./components/Die.jsx";

function App() {
  const [dice, setDice] = useState(allNewDice);

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6));
    }
    return diceArray;
  }

  const diceElements = dice.map((number, index) => (
    <Die key={index} value={number} />
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
