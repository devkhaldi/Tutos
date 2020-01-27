import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamActions'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
  return (
    <div>
      <h2>Number of Ice Creams - {props.numberOfIceCreams}</h2>
      <button onClick={props.buyIceCream}>Buy Ice Cream</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numberOfIceCreams: state.iceCream.numberOfIceCreams
  }
}
const mapDispatchToProps = dispatch => {
  return {
    // buy ice cream is function
    buyIceCream: () => dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)
