import React, { Component } from "react";
import Cell from "./Cell";
import PropTypes from "prop-types";
//import style from "./css/Board.module.css";

const lineStyle = "flex h-screen text-red-700"
class Board extends Component {
  renderCell(i) {
    return <Cell value={this.props.cells[i]} onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div className="flex flex-col h-screen">
        <div className={lineStyle}>
          {this.renderCell(0)}
          {this.renderCell(1)}
          {this.renderCell(2)}
        </div>
        <div className={lineStyle}>
          {this.renderCell(3)}
          {this.renderCell(4)}
          {this.renderCell(5)}
        </div>
        <div className={lineStyle}>
          {this.renderCell(6)}
          {this.renderCell(7)}
          {this.renderCell(8)}
        </div>
      </div>
    );
  }
}

Board.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
