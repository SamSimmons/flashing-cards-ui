import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CreateActions from '../../actions'

class CreateCard extends Component {

  render() {
    return (
      <div>
        <div>Front</div>
        <textarea ref={(input) => this.frontInput = input}></textarea>
        <div>Back</div>
        <textarea ref={(input) => this.backInput = input}></textarea>
        <button onClick={() => this.props.createCard(this.frontInput.value, this.backInput.value)}>CREATE NEW CARD</button>
      </div>
    )
  }
}

const mapActionCreatorsToProps = (dispatch) => bindActionCreators(CreateActions, dispatch)

export default connect(null, mapActionCreatorsToProps)(CreateCard)
