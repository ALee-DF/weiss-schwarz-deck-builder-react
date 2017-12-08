import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <a href=''>
          <img src='weiss-schwarz-logo.png' alt='Weiss Schwarz Logo'/>
        </a>
        <div id="cards-and-packs-buttons">
          <button id="view-cards">VIEW CARDS</button>
        </div>
      </header>
    )
  }
}
