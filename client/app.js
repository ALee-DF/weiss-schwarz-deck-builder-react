import React, { Component } from 'react'
import Header from './header.js'
import BoosterPacksSection from './booster-packs-section.js'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <BoosterPacksSection />
      </div>
    )
  }
}
