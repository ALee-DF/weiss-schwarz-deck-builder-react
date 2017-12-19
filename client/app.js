import React, { Component } from 'react'
import Header from './header.js'
import BoosterPacksSection from './booster-packs-section.js'
import CardListSection from './card-list-section.js'
import DeckSection from './deck-section.js'
import { boosterPacksList } from './booster-packs-data.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      selectedPacks: [],
      deck: []
    }
    this.handlePacksClick = this.handlePacksClick.bind(this)
    this.handleViewsClick = this.handleViewsClick.bind(this)
    this.handleCardListClick = this.handleCardListClick.bind(this)
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
      document.querySelector('#view-cards').classList.add('hidden')
      document.querySelector('#view-packs').classList.remove('hidden')
      document.querySelector('#booster-packs-section').classList.add('hidden')
      document.querySelector('#card-list-section').classList.remove('hidden')
    }

    if (target.closest('button').id === 'view-packs') {
      document.querySelector('#view-cards').classList.remove('hidden')
      document.querySelector('#view-packs').classList.add('hidden')
      document.querySelector('#booster-packs-section').classList.remove('hidden')
      document.querySelector('#card-list-section').classList.add('hidden')
    }

    if (target.closest('button').id === 'view-deck') {
      document.querySelector('#cards-and-packs-buttons').classList.add('invisible')
      document.querySelector('#view-deck').classList.add('hidden')
      document.querySelector('#return').classList.remove('hidden')
      document.querySelector('#booster-pack-and-card-list-section').classList.add('hidden')
      document.querySelector('#deck-section').classList.remove('hidden')
    }

    if (target.closest('button').id === 'return') {
      document.querySelector('#cards-and-packs-buttons').classList.remove('invisible')
      document.querySelector('#view-deck').classList.remove('hidden')
      document.querySelector('#return').classList.add('hidden')
      document.querySelector('#booster-pack-and-card-list-section').classList.remove('hidden')
      document.querySelector('#deck-section').classList.add('hidden')
    }
  }

  handleCardListClick({ target }) {
    if (target.closest('div') === null || !target.closest('div').hasAttribute('card-number')) return
    if (this.state.deck.reduce((sum, { copies }) => sum + copies, 0) === 50) return
    if (target.closest('div').getAttribute('card-type') === 'Climax' &&
      this.state.deck.reduce((sum, card) => card.cardType === 'Climax' ? sum + card.copies : sum, 0) === 8) return

    const retrievedCard = boosterPacksList[boosterPacksList.findIndex(({ expansion }) => expansion === target.closest('div').getAttribute('expansion'))].cards.find(({ cardNumber }) => cardNumber === target.closest('div').getAttribute('card-number'))
    const deckIndex = this.state.deck.findIndex(({ cardName, cardNumber }) => cardName === retrievedCard.cardName && cardNumber === retrievedCard.cardNumber)
    if (deckIndex === -1) {
      retrievedCard['copies'] = 1
      this.setState({
        deck: [...this.state.deck, retrievedCard]
      })
      return
    }

    const updateDeck = [...this.state.deck]
    const numberOfSameCardNames = updateDeck.reduce((sum, card) => card.cardName === retrievedCard.cardName ? sum + card.copies : sum, 0)
    if (numberOfSameCardNames === 4) return

    updateDeck[deckIndex].copies = updateDeck[deckIndex].copies + 1
    this.setState({
      deck: updateDeck
    })
  }

  render() {
    return (
      <div>
        <Header
          deck={this.state.deck}
          handleClick={this.handleViewsClick}
        />
        <div id='booster-pack-and-card-list-section'>
          <BoosterPacksSection
            boosterPacksList={boosterPacksList}
            handleClick={this.handlePacksClick}
          />
          <CardListSection
            cards={this.state.cards}
            handleClick={this.handleCardListClick}
          />
        </div>
        <DeckSection
          deck={this.state.deck}
        />
      </div>
    )
  }
}
