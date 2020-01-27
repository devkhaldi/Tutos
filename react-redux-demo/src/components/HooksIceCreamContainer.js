import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'

function HooksIceCreamContainer() {
  const numberOfIceCreams = useSelector(state => state.iceCream.numberOfIceCreams)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of iceCreams - {numberOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy iceCream</button>
    </div>
  )
}

export default HooksIceCreamContainer
