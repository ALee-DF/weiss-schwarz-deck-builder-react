import React from 'react'
const renderCards = ({ cardName, picture, cardType }, index) =>
  <div
    key={index}
    className={cardType === 'Climax' ? 'climax-card-icons' : 'card-icons'}>
    <img
      className={cardType === 'Climax' ? 'full-climax-card-illustration' : 'full-card-illustration'}
      src={picture}
      alt={cardName}
    />
  </div>

export default function CardListSection({ boosterPacksList, cards }) {
  return (
    <section id="card-list-section" className='hidden'>
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
