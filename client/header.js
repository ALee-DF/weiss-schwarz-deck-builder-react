import React from 'react'

export default function Header({ deck, handleClick }) {
  return (
    <header>
      <a href=''>
        <img src='weiss-schwarz-logo.png' alt='Weiss Schwarz Logo'/>
      </a>
      <div id="cards-and-packs-buttons" onClick={handleClick}>
        <button id="view-cards">VIEW CARDS</button>
        <button id="view-packs" className="hidden">VIEW PACKS</button>
      </div>
      <button id="view-deck" onClick={handleClick}>VIEW DECK</button>
      <button id="return" className="hidden" onClick={handleClick}>RETURN</button>
      <div id="card-count-section">
        <div className="deck-column-1-of-4">
          <p>Character</p>
          <p>{deck.reduce((sum, { copies, cardType }) => cardType === 'Character' ? sum + copies : sum, 0)}</p>
        </div>
        <div className="deck-column-2-of-4">
          <p>Event</p>
          <p>{deck.reduce((sum, { copies, cardType }) => cardType === 'Event' ? sum + copies : sum, 0)}</p>
        </div>
        <div className="deck-column-3-of-4">
          <p>Climax</p>
          <p>{deck.reduce((sum, { copies, cardType }) => cardType === 'Climax' ? sum + copies : sum, 0)}</p>
        </div>
        <div className="deck-column-4-of-4">
          <p>Card Count</p>
          <p>{deck.reduce((sum, { copies }) => sum + copies, 0) + '/50'}</p>
        </div>
      </div>
    </header>
  )
}
