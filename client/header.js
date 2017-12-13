import React from 'react'

export default function Header({ handleClick }) {
  return (
    <header>
      <a href=''>
        <img src='weiss-schwarz-logo.png' alt='Weiss Schwarz Logo'/>
      </a>
      <div id="cards-and-packs-buttons" onClick={handleClick}>
        <button id="view-cards">VIEW CARDS</button>
        <button id="view-packs" className="hidden">VIEW PACKS</button>
      </div>
    </header>
  )
}
