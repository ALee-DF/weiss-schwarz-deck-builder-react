import React, { Component } from 'react'
import Header from './header.js'
import BoosterPacksSection from './booster-packs-section.js'
import { boosterPacksList } from './booster-packs-data.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick({ target }) {
    if (target.closest('button') !== null) {
      if (target.closest('button').className === 'button-tiles') {
        target.closest('button').setAttribute('class', 'pack-selected')
      }
      else {
        target.closest('button').setAttribute('class', 'button-tiles')
      }
    }
  }

  render() {
    return (
      <div>
        <Header />
        <BoosterPacksSection
          boosterPacksList={boosterPacksList}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}
