import { put, take, fork } from 'redux-saga/effects'
import axios from 'axios'

const fetchCards = () => {
  return axios.get('http://localhost:8080/cards')
    .then(res => res.data)
}

const sendNewCard = (card) => {
  return axios.post('http://localhost:8080/cards/create', card)
    .then(res => res.body)
}

export function* loadCards() {
  const cards = yield fetchCards()
  yield put({type: "CARDS_LOADED", cards})
  yield put({type: "CARD_SELECTED", card: cards[0]})
}

export function* watchForLoadCards() {
  while (true) {
    yield take("LOAD_CARDS")
    yield fork(loadCards)
  }
}

export function* watchforNewCard() {
  const action = yield take("CREATE_CARD")
  const card = { Front: action.front, Back: action.back }
  yield sendNewCard(card)
}
