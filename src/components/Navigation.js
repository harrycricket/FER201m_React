import React, { Component } from "react";
export default class Navigation extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul className="heading">
                        <li className="heading-title"><a className="active" href="#home">Home</a></li>
                        <li className="heading-title"><a href="#news">News</a></li>
                        <li className="heading-title"><a href="#about">About</a></li>
                        <li className="heading-title"><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}