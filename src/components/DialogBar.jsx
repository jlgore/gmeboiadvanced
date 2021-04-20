import React, { Component } from 'react';
import "nes.css/css/nes.min.css";

export class DialogBar extends Component {

  render() {
    return(
<div class="nes-table-responsive">
    <table class="nes-table is-bordered is-dark">
            <thead>
                <tr>
                    <th>Events</th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <td>10:15 AM: GME used Gamma Squeeze! Super Effective! Hedgie took damage! Ha!</td>
            </tr>
        </tbody>
    </table>
</div>
    )
  }

}