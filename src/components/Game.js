import React, { useEffect, useState } from "react";
import Board from "./Board";
import style from "./css/Game.module.css";
import { appStore } from "../store";
import { connect } from "react-redux";

const Game = () => {
  // const [cells, setCells] = useState(Array(9).fill(null));
  //const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    //const newCells = [...cells];
    const newCells = [...appStore.getState().cells];

    //if (calculateWinner(cells) || newCells[i]) {
    if (calculateWinner(appStore.getState().cells) || newCells[i]) {
      return;
    }
    //console.log(`appStore.getState().xIsNext = ${appStore.getState().xIsNext}`);
    newCells[i] = appStore.getState().xIsNext ? "X" : "O";

    //setCells(newCells);
    appStore.dispatch({
      type: "move",
      payload: { cells: newCells, xIsNext: appStore.getState().xIsNext },
    });

    //setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    //setCells(Array(9).fill(null));
    appStore.dispatch({ type: "restart", payload: {} });
    //setXIsNext(true);
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

  //const winner = calculateWinner(cells);
  const winner = calculateWinner(appStore.getState().cells);
  const status = winner
    ? `Победитель: ${winner}`
    : `Следующий  игрок: ${appStore.getState().xIsNext ? "X" : "O"}`;
  // console.log(appStore.getState());
  return (
    <div className={style.game}>
      <div>{status}</div>
      <Board cells={appStore.getState().cells} onClick={handleClick} />
      {winner && <button onClick={handleRestart}>Начать заново</button>}
    </div>
  );
};

//export default Game;

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Game);
