import React from "react";
import { Players } from "../share/ListOfPlayers";
import { Link } from "react-router-dom";

export default function Player() {
  return (
    <div className="container">
      {Players.map((player) => (
        <div className="column">
          <div className="card">
            <img src={player.img} />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <Link to={`detail/${player.id}`}>
              <p>
                <button>Detail</button>
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
