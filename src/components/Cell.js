import React from "react";
import Symbol from "./Symbol";
//import styles from "./css/Cell.module.css";

class Cell extends React.Component {
  render() {
    const { value, onClick } = this.props;

    return (
      <div className="cell w-full h-full  flex justify-center items-center border-2 border-black " onClick={onClick}>
        <Symbol value={value} />
      </div>
    );
  }
}

export default Cell;
