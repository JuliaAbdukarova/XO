import React, { Component } from "react";
import style from "./css/Symbol.module.css";

class Symbol extends Component {
  render() {
    return <div className={style.symbol}>{this.props.value}</div>;
  }
}

export default Symbol;