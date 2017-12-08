import React, { Component } from 'react'
import { boosterPacksList } from './booster-packs-data.js'
const renderPack = ({ visual }, index) =>
  <button
    key={index}
    className='button-tiles'>
    <img className='booster-pack-icon' src={visual} />
  </button>

export default class BoosterPacksSection extends Component {
  render() {
    return (
      <section id='booster-packs-section'>
        {
          boosterPacksList.map(renderPack)
        }
      </section>
    )
  }
}
