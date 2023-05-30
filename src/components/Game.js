import React, { useState } from "react";
import Board from "./Board";
import style from "./Game.module.css";

const Game = () => {
  const [cells, setCells] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const newCells = [...cells];
    if (calculateWinner(cells) || newCells[i]) {
      return;
    }
    newCells[i] = xIsNext ? "X" : "O";
    setCells(newCells);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setCells(Array(9).fill(null));
    setXIsNext(true);
  };

  const calculateWinner = (cells) => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
        return cells[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(cells);
  const status = winner
    ? `Победитель: ${winner}`
    : `Следующий  игрок: ${xIsNext ? "X" : "O"}`;

  return (
    <div className={style.game}>
      <div>{status}</div>
      <Board cells={cells} onClick={handleClick} />
      {winner && <button onClick={handleRestart}>Начать заново</button>}
    </div>
  );
};

export default Game;
