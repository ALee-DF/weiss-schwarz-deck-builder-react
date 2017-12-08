import React from 'react'
const renderPack = ({ visual }, index) =>
  <button
    key={index}
    className='button-tiles'>
    <img className='booster-pack-icon' src={visual} />
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
