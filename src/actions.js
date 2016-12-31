export const FLIP_CARD = "FLIP_CARD"
export function flipCard(card) {
  return {
    type: FLIP_CARD,
    card
  }
}

export const LOAD_CARDS = "LOAD_CARDS"
export function loadCards() {
  return {
    type: LOAD_CARDS
  }
}

export const NEW_CARD = "NEW_CARD"
export function newCard(card) {
  return {
    type: NEW_CARD,
    card
  }
}

export const CREATE_CARD = "CREATE_CARD"
export function createCard(front, back) {
  return {
    type: CREATE_CARD,
    front,
    back
  }
}

export const CARD_CORRECT = "CARD_CORRECT"
export function guessCorrect() {
  return {
    type: CARD_CORRECT
  }
}

export const CARD_INCORRECT = "CARD_INCORRECT"
export function guessIncorrect() {
  return {
    type: CARD_INCORRECT
  }
}
