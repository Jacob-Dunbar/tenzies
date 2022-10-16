import { useState } from "react";
import "./style.css";
import Die from "./components/Die.jsx";

function App() {
  const [numbers, setNumbers] = useState(allNewDice);

  function allNewDice() {
    const diceArray = [];
    for (let i = 0; i < 10; i++) {
      diceArray.push(Math.ceil(Math.random() * 6));
    }
    return diceArray;
  }

  console.log(numbers);

  const dice = numbers.map((number) => <Die value={number} />);

  return (
    <div className="App">
      <main className="main">
        <div className="die__container">{dice}</div>
      </main>
    </div>
  );
}

export default App;
