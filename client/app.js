import React, { Component } from 'react'
import Header from './header.js'
import BoosterPacksSection from './booster-packs-section.js'
import CardListSection from './card-list-section.js'
import { boosterPacksList } from './booster-packs-data.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      selectedPacks: []
    }
    this.handlePacksClick = this.handlePacksClick.bind(this)
    this.handleViewsClick = this.handleViewsClick.bind(this)
  }

  handlePacksClick({ target }) {
    if (target.closest('button') === null) return
    if (target.closest('button').className === 'button-tiles') {
      this.setState({
        selectedPacks: [
          ...this.state.selectedPacks,
          target.closest('button').getAttribute('expansion')
        ].sort()
      })
      target.closest('button').setAttribute('class', 'pack-selected')
    }
    else {
      const selectedPacksCopy = this.state.selectedPacks.slice('')
      selectedPacksCopy.splice(this.state.selectedPacks.findIndex(expansion => {
        return expansion === target.closest('button').getAttribute('expansion')
      }), 1)
      this.setState({
        selectedPacks: selectedPacksCopy
      })
      target.closest('button').setAttribute('class', 'button-tiles')
    }
  }

  handleViewsClick({ target }) {
    if (target.closest('button') === null) return
    if (target.closest('button').id === 'view-cards') {
      this.setState({
        cards: this.state.selectedPacks.reduce((cards, selectedExpansion) => {
          return [
            ...cards,
            ...boosterPacksList[boosterPacksList.findIndex(({ expansion }) => expansion === selectedExpansion)].cards
          ]
        }, [])
      })
      document.querySelector('#booster-packs-section').classList.add('hidden')
      document.querySelector('#card-list-section').classList.remove('hidden')
    }
  }

  render() {
    return (
      <div>
        <Header handleClick={this.handleViewsClick} />
        <BoosterPacksSection
          boosterPacksList={boosterPacksList}
          handleClick={this.handlePacksClick}
        />
        <CardListSection
          boosterPacksList={boosterPacksList}
          cards={this.state.cards}
        />
      </div>
    )
  }
}
