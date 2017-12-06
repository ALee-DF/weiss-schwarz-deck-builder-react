import React from 'react'
import ReactDOM from 'react-dom'
import { boosterPacksList } from './booster-packs-data.js'
ReactDOM.render(
  <div>
    <header>
      <a href=''><img src='weiss-schwarz-logo.png' alt='Weiss Schwarz Logo'/></a>
    </header>
    <section id='booster-packs-section'>
      {
        boosterPacksList.map(({ visual }, index) =>
          <button
            key={index}
            className='button-tiles'>
            <img className='booster-pack-icon' src={visual} />
          </button>)
      }
    </section>
  </div>,
  document.querySelector('#root')
)
