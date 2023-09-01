import React from "react";
import Symbol from "./Symbol";
import styles from "./css/Cell.module.css";

class Cell extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <div className={styles.cell} onClick={onClick}>
        <Symbol value={value} />
      </div>
    );
  }
}

export default Cell;
