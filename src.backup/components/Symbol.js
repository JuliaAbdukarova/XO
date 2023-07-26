import React from "react";
import style from "./css/Symbol.module.css";

const Symbol = ({ value }) => {
  return <div className={style.symbol}>{value}</div>;
};

export default Symbol;
