import { useState, useEffect } from "react";
import "./style.css";
import Die from "./components/Die.jsx";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import Paragraph from "./components/Paragraph";

function App() {
  const [dice, setDice] = useState(allNewDice);

  const [endGame, setEndGame] = useState(false);

  const [numOfRolls, setNumOfRolls] = useState(0);

  const [highScore, setHighScore] = useState(
    JSON.parse(localStorage.getItem("highScore")) || 100
  );

  useEffect(() => {
    const targetNumber = dice[0].value;
    const allHeld = dice.every((die) => die.isHeld);
    const allSame = dice.every((die) => die.value === targetNumber);
    if (allHeld && allSame) {
      if (numOfRolls < highScore) {
        setHighScore(numOfRolls);
        localStorage.setItem("highScore", JSON.stringify(numOfRolls));
      }
      setEndGame(true);
      console.log("You Won!");
    }
  }, [dice]);

  console.log(highScore);

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
    setNumOfRolls((prevVal) => prevVal + 1);
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

  function restGame() {
    setDice(allNewDice());
    setEndGame(false);
    setNumOfRolls(0);
  }

  return (
    <div className="App">
      {endGame && <Confetti />}
      <main className="main">
        <h1 className="title">{endGame ? "You Won!" : "Tenzies"}</h1>
        <Paragraph
          endGame={endGame}
          highScore={highScore}
          numOfRolls={numOfRolls}
        />
        <div className="die__container">{diceElements}</div>
        <button onClick={endGame ? restGame : roll}>
          {endGame ? "Play Again" : "Roll"}
        </button>
      </main>
    </div>
  );
}

export default App;
