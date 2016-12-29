import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GalleryActions from '../../actions'

const Controls = (props) => {
  if (!props.flipped) {
    return (
      <div className="controls">
        <button className="btn" onClick={props.flipCard}><i className="material-icons">flip_to_back</i>FLIP</button>
      </div>
    )
  }
  return (
    <div className="controls">
      <button className="btn" onClick={() => {
        props.newCard(props.currentCard)
        props.flipCard()
      }}><i className="material-icons">check_circle</i>CORRECT</button>
      <button className="btn" onClick={() => {
        props.newCard(props.currentCard)
        props.flipCard()
      }}><i className="material-icons">cancel</i>WRONG</button>
      <button className="btn"><i className="material-icons">note_add</i>NOTE</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    flipped: state.flipped,
    currentCard: state.currentCard
  }
}

const mapActionCreatorsToProps = (dispatch) => {
  return bindActionCreators(GalleryActions, dispatch)
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Controls)
