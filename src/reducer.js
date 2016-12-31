import _ from 'lodash'
const defaultState = {
  cards: [],
  currentCard: {},
  flipped: false,
  sessionTotal: 0,
  sessionCorrect: 0,
  sessionIncorrect: 0
}

export default function (state = defaultState, action) {
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
    case "CARD_CORRECT": {
      return {
        ...state,
        sessionTotal: state.sessionTotal += 1,
        sessionCorrect: state.sessionCorrect += 1
      }
    }
    case "CARD_INCORRECT": {
      return {
        ...state,
        sessionTotal: state.sessionTotal += 1,
        sessionIncorrect: state.sessionIncorrect += 1
      }
    }
  }
  return state
}
