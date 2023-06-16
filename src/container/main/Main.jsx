import React, { Component } from "react";
import { data } from "../../assets/store/ListOfPlayers";
import Players from "../players/Players";
export class Main extends Component {
  constructor() {
    super();
    this.state = {
      players: data,
    };
  }
  render() {
    return <Players players={this.state.players} />;
  }
}
export default Main;
