import "./App.css";
import Game from "./components/Game";
import React, { useState } from "react";

const onClickHandler = () => console.log("dafault behavier");

function App() {
  return (
    <React.StrictMode>
      <Game />
    </React.StrictMode>
  );
}

export default App;
