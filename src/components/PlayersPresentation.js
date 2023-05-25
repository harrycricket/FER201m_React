import React from "react";
import { useState } from "react";

export default function PlayersPresentation({ players }) {
  const [player, setPlayer] = useState([]);
  return (
    <div className="container">
      {players.map((player) => (
        <div className="column">
          <div className="card">
            <img src={player.img} alt="" />
            <h3>{player.name}</h3>
            <p className="title">{player.club}</p>
            <p>
              <button
                onClick={() => {
                  setPlayer(player);
                }}
              >
                <a href="#popup1" id="openPopUp">
                  Detail
                </a>
              </button>
            </p>
          </div>
        </div>
      ))}
      <div id="popup1" className="overlay">
        <div className="popup">
          <img src={player.img} alt="" />
          <h2>{player.name}</h2>
          <a href="#" className="close">
            &times;
          </a>
          <div className="content">{player.info}</div>
        </div>
      </div>
    </div>
  );
}
// import React from "react";
// export default function PlayersPresentation({ players }) {
//   return (
//     <div className="container">
//       {players.map((player) => (
//         <div className="column">
//           <div className="card">
//             <img src={player.img} alt="" />
//             <h3>{player.name}</h3>
//             <p className="title">{player.club}</p>
//             <p>
//               <button>Detail</button>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
