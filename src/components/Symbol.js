import React from "react";
import style from "./Symbol.module.css";

const Symbol = ({ value }) => {
  return <div className={style.symbol}>{value}</div>;
};

export default Symbol;
