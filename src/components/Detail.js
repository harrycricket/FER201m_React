import React from "react";
import { useParams } from "react-router-dom";
import { Players } from "../share/ListOfPlayers";

export function Detail() {
  const userName = useParams();
  const player = Players.find((obj) => {
    return obj.id == userName.id;
  });
  if (!player) {
    return <div>Player not found.</div>;
  }
  let cost = player.cost.toLocaleString();
  return (
    <div className="containerDetail">
      <div className="product-card">
        <div className="badge">{player.name.toUpperCase()}</div>
        <div className="product-tumb">
          <img src={`../${player.img}`} alt="" />
        </div>
      </div>
      <div className="product-details">
        <h4>{player.club.toUpperCase()}</h4>
        <div className="product-price">Market value: € {cost}</div>
        <div className="product-bottom-details">{player.info}</div>
      </div>
    </div>
  );
}
