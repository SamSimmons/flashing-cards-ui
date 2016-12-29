import _ from 'lodash'

export default function (state = {cards: [], currentCard: {}, flipped: false }, action) {
  switch (action.type) {
    case "FLIP_CARD": {
      return {
        ...state,
        flipped: !state.flipped
      }
    }
    case "CARDS_LOADED": {
      return {
        ...state,
        cards: action.cards
      }
    }
    case "CARD_SELECTED": {
      return {
        ...state,
        currentCard: action.card
      }
    }
    case "NEW_CARD": {
      const currentIndex = _.findIndex(state.cards, {"ID": action.card.ID})
      const nextCard = currentIndex >= (state.cards.length - 1) ? state.cards[0] : state.cards[currentIndex + 1]
      return {
        ...state,
        currentCard: nextCard
      }
    }
  //   case "CREATE_CARD": {
  //     console.log(action)
  //     return state
  //   }
  }
  return state
}
