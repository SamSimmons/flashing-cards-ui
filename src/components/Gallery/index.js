import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as GalleryActions from '../../actions'

import Card from "../Card"
import Controls from "../Controls"

class Gallery extends Component {
  componentDidMount() {
    this.props.loadCards()
  }

  render() {
    let { currentCard, flipCard, flipped } = this.props
    return (
      <div className="gallery">
        <Card {...currentCard} flip={flipCard} flipped={flipped} />
        <Controls />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    currentCard: state.currentCard,
    flipped: state.flipped
  }
}

const mapActionCreatorsToProps = (dispatch) => {
  return bindActionCreators(GalleryActions, dispatch)
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(Gallery)
