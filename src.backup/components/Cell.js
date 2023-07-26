import React from "react";
import Symbol from "./Symbol";
import styles from "./css/Cell.module.css";

const Cell = ({ value, onClick }) => {
  return (
    <div className={styles.cell} onClick={onClick}>
      <Symbol value={value} />
    </div>
  );
};

export default Cell;
