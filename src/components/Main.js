import React, { Component, useState } from "react";
import { Players } from "../share/ListOfPlayers";
import PlayersPresentation from "./PlayersPresentation";

export default function Main() {
  const [players, setPlayers] = useState(Players);
  return <PlayersPresentation players={players} />;
}
