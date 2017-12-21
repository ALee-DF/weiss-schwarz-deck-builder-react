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
    <select className='select-bar' value={copies}>
      <option value='0'>0</option>
      <option value='1'>1</option>
      <option value='2'>2</option>
      <option value='3'>3</option>
      <option value='4'>4</option>
    </select>
  </div>

export default function CardListSection({ cards, handleChange, handleClick }) {
  return (
    <section id="card-list-section" className='hidden' onClick={handleClick} onChange={handleChange}>
      <div>
        <h1 className='card-headers'>Characters Cards</h1>
        {
          cards.filter(({ cardType }) => cardType === 'Character').map(renderCards)
        }
      </div>
      <div>
        <h1 className='card-headers'>Event Cards</h1>
        {
          cards.filter(({ cardType }) => cardType === 'Event').map(renderCards)
        }
      </div>
      <div>
        <h1 className='card-headers'>Climax Cards</h1>
        {
          cards.filter(({ cardType }) => cardType === 'Climax').map(renderCards)
        }
      </div>
    </section>
  )
}
