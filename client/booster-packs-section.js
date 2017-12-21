import React from 'react'
const renderPack = ({ expansion, visual }, index) =>
  <button
    key={index}
    className='button-tiles'
    expansion={expansion}>
    <img className='booster-pack-icon' src={visual} />
    <p className='expansion-title'>{expansion}</p>
  </button>

export default function BoosterPacksSection({ boosterPacksList, handleClick }) {
  return (
    <section id='booster-packs-section' onClick={handleClick}>
      {
        boosterPacksList.map(renderPack)
      }
    </section>
  )
}
