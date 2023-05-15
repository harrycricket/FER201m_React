import React from "react";
export default function Navigation() {
  return (
    <div>
      <nav>
        <ul className="heading">
          <li className="heading-title">
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li className="heading-title">
            <a href="#news">News</a>
          </li>
          <li className="heading-title">
            <a href="#about">About</a>
          </li>
          <li className="heading-title">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
