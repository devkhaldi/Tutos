import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux/cake/cakeActions'

function NewCakeContainer() {
  const [number, setNumber] = useState(1)
  const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numberOfCakes}</h2>
      <input value={number} onChange={e => setNumber(e.target.value)} type="text" />
      <button onClick={() => dispatch(buyCake(number))}>Buy cake</button>
    </div>
  )
}

export default NewCakeContainer
