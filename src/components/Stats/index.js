import React from 'react'
import { connect } from 'react-redux'

const Stats = (props) => {
  return (
    <div>
      <div>total: {props.total}</div>
      <div>correct: {props.correct}</div>
      <div>incorrect: {props.incorrect}</div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    total: state.sessionTotal,
    correct: state.sessionCorrect,
    incorrect: state.sessionIncorrect
  }
}

export default connect(mapStateToProps)(Stats)
