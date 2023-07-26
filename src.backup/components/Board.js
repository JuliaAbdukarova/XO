import Cell from "./Cell";
import PropTypes from "prop-types";
import style from "./css/Board.module.css";
import { appStore } from "../store";

const Board = ({ cells, onClick }) => {
  const renderCell = (i) => {
    return <Cell value={cells[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div className={style.board}>
      <div className={style.line}>
        {renderCell(0)}
        {renderCell(1)}
        {renderCell(2)}
      </div>
      <div className={style.line}>
        {renderCell(3)}
        {renderCell(4)}
        {renderCell(5)}
      </div>
      <div className={style.line}>
        {renderCell(6)}
        {renderCell(7)}
        {renderCell(8)}
      </div>
    </div>
  );
};

Board.propTypes = {
  cells: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Board;
