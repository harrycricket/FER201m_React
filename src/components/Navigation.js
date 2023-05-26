// import React, { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";
// export default function Navigation() {
//   const { theme, toggle, dark } = useContext(ThemeContext);
//   return (
//     <div>
//       <nav
//         style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
//       >
//         <ul className="heading">
//           <li className="heading-title">
//             <a className="active" href="#home">
//               Home
//             </a>
//           </li>
//           <li className="heading-title">
//             <a href="#news">News</a>
//           </li>
//           <li className="heading-title">
//             <a href="#about">About</a>
//           </li>
//           <li className="heading-title">
//             <a href="#contact">Contact</a>
//           </li>
//         </ul>

//         <div style={{ position: "relative" }}>
//           <a
//             className="switch-mode"
//             href="#"
//             onClick={toggle}
//             style={{
//               backgroundColor: theme.backgroundColor,
//               color: theme.color,
//               outline: "none",
//             }}
//             data-testid="toggle-theme-btn"
//           >
//             <div className="switch-content">
//               Switch Nav to {!dark ? "Dark" : "Light"} mode
//             </div>
//           </a>
//         </div>
//       </nav>
//     </div>
//   );
// }

import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
export default function Navigation() {
  const { theme, toggle, dark } = useContext(ThemeContext);
  return (
    <div>
      <nav
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
        className="header"
      >
        <ul>
          <li className="heading-title">
            <a
              className="active"
              href="#home"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
            >
              Home
            </a>
          </li>
          <li className="heading-title">
            <a
              href="#news"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
            >
              News
            </a>
          </li>
          <li className="heading-title">
            <a
              href="#about"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
            >
              About
            </a>
          </li>
          <li className="heading-title">
            <a
              href="#contact"
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: "none",
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <div style={{ position: "relative" }}>
          <a
            className="switch-mode"
            href="#"
            onClick={toggle}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
              outline: "none",
            }}
            data-testid="toggle-theme-btn"
          >
            Switch Nav to {!dark ? "Dark" : "Light"} mode
          </a>
        </div>
      </nav>
    </div>
  );
}
