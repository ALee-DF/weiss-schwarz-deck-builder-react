import React from 'react'
const renderCards = ({ cardName, cardNumber, cardType, copies, expansion, rarity, picture }, index) =>
  <div
    key={index}
    className={cardType === 'Climax' ? 'climax-card-icons' : 'card-icons'}
    card-number={cardNumber}
    card-type={cardType}
    expansion={expansion}>
    <img
      className={cardType === 'Climax' ? 'full-climax-card-illustration' : 'full-card-illustration'}
      src={picture}
      alt={cardName}
    />
    <p className='card-title'>{cardName + ' (' + rarity + ')'}</p>
    <select className='select-bar' value={copies} readOnly='readonly'>
      <option value='0'>0</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
    </select>
  </div>

export default function DeckSection({ deck, handleChange }) {
  return (
    <section id='deck-section' className='hidden' onChange={handleChange}>
      <div>
        <h1 className='card-headers'>Level 0</h1>
        {
          deck.filter(({ cardType, level }) => cardType === 'Character' && level === 0).map(renderCards)
        }
      </div>
      <div>
        <h1 className='card-headers'>Level 1</h1>
        {
          deck.filter(({ cardType, level }) => cardType === 'Character' && level === 1).map(renderCards)
        }
      </div>
      <div>
        <h1 className='card-headers'>Level 2</h1>
        {
          deck.filter(({ cardType, level }) => cardType === 'Character' && level === 2).map(renderCards)
        }
      </div>
      <div>
        <h1 className='card-headers'>Level 3</h1>
        {
          deck.filter(({ cardType, level }) => cardType === 'Character' && level === 3).map(renderCards)
        }
      </div>
      <div>
        <h1 className='card-headers'>Event</h1>
        {
          deck.filter(({ cardType }) => cardType === 'Event').map(renderCards)
        }
      </div>
      <div>
        <h1 className='card-headers'>Climax</h1>
        {
          deck.filter(({ cardType }) => cardType === 'Climax').map(renderCards)
        }
      </div>
    </section>
  )
}
