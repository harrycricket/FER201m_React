import React, { useState } from "react";
import "./players.css";
import { Link } from "react-router-dom";
export default function PlayersPresentation({ players }) {
   const [player, setPlayer] = useState([]);
   console.log(player);
   return (
      <div className="container-players">
         {players.map((player) => (
            <div className="column2" key={player.id}>
               <div className="card">
                  <img src={`../../${player.img}`} alt="" />
                  <h5>{player.name}</h5>
                  <p className="title">{player.club}</p>
                  <Link to={`detail/${player.id}`}>
                     <p>
                        <button>Detail</button>
                     </p>
                  </Link>
               </div>
            </div>
         ))}
         {/* <div id="popup" className="overlay">
            <div className="popup">
               <img src={player.img} alt="" />
               <h2>{player.name}</h2>
               <a className="close" href="#">
                  &times;
               </a>
               <div className="content">{player.info}</div>
            </div>
         </div> */}
      </div>
   );
}
