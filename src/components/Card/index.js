import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div className="card" onClick={props.flip}>
      <div className="front">{props.front}</div>
      <div className="back">{props.flipped ? props.back : ""}</div>
    </div>
  )
}

export default Card
