import React, { Component } from 'react';
import "nes.css/css/nes.min.css";
import gifcat from "../unnamed.gif"

export class BossBattle extends Component {

  render() {
    return(
        <div class="nes-container is-dark with-title is-rounded">
        <p class="GMEBOI">Stock Fighting: GME</p>
        <img className=".figher" src={gifcat} alt="gmeboi"/>
        <progress class="nes-progress is-error" value="10" max="100"></progress>
        <progress class="nes-progress is-success" value="50" max="100"></progress>

        <p>GME $HP: $155.33</p>

        </div>
    )
  }

}