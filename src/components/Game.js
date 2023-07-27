import Board from "./Board";
import style from "./css/Game.module.css";
import { appStore } from "../store";
import { connect, useDispatch } from "react-redux";
import { moveAction, restartAction } from "../actions";
import { selectCells, selectUser } from "../selectors";
import { calculateWinner } from "../hooks";

const Game = () => {
  const dispatch = useDispatch();

  const handleClick = (i) => {
    const newCells = [...selectCells(appStore)];

    if (calculateWinner(selectCells(appStore)) || newCells[i]) {
      return;
    }

    newCells[i] = selectUser(appStore) ? "X" : "O";

    dispatch(moveAction(newCells));
  };

  const handleRestart = () => {
    dispatch(restartAction());
  };

  //const winner = calculateWinner(cells);
  const winner = calculateWinner(selectCells(appStore));
  const status = winner
    ? `Победитель: ${winner}`
    : `Следующий  игрок: ${selectUser(appStore) ? "X" : "O"}`;
  // console.log(appStore.getState());
  return (
    <div className={style.game}>
      <div>{status}</div>
      <Board cells={selectCells(appStore)} onClick={handleClick} />
      {winner && <button onClick={handleRestart}>Начать заново</button>}
    </div>
  );
};

//export default Game;

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Game);
