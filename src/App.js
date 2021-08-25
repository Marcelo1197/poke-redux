import React from "react";

import Pokemones from "./components/Pokemones";

import "./App.css"

export default function App() {
  return (
    <div className="main">
      <h1>PokeRedux!</h1>
      <Pokemones />
    </div>
  );
}