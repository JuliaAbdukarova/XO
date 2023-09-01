import React, { Component } from "react";
import Board from "./Board";
import style from "./css/Game.module.css";
import { appStore } from "../store";
import { connect } from "react-redux";
import { moveAction, restartAction } from "../actions";
import { selectCells, selectUser } from "../selectors";
import { calculateWinner } from "../hooks";

class Game extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleRestart = this.handleRestart.bind(this);
  }

  handleClick(i) {
    const newCells = [...selectCells(appStore)];

    if (calculateWinner(selectCells(appStore)) || newCells[i]) {
      return;
    }

    newCells[i] = selectUser(appStore) ? "X" : "O";

    this.props.dispatch(moveAction(newCells));
  }

  handleRestart() {
    this.props.dispatch(restartAction());
  }

  render() {
    const winner = calculateWinner(selectCells(appStore));

    const status = winner
      ? `Победитель: ${winner}`
      : `Следующий  игрок: ${selectUser(appStore) ? "X" : "O"}`;

    console.log(appStore.getState());
    return (
      <div className={style.game}>
        <div>{status}</div>
        <Board cells={selectCells(appStore)} onClick={this.handleClick} />
        {winner && <button onClick={this.handleRestart}>Начать заново</button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(Game);
