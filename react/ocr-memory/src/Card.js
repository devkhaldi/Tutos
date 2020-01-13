import React from 'react'

import './Card.css'

const HIDDEN_SYMBOL = '❓'

function Card({ card, feedback, onClick }) {
  return (
    <div className={`card ${feedback}`} onClick={() => onClick(card)}>
      <span className="symbol">
        {feedback === 'hidden' ? HIDDEN_SYMBOL : card}
      </span>
    </div>
  )
}

export default Card
