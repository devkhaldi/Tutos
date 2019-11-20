import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
        // this.changeMessage = this.changeMessage.bind(this)
    }
    
    // changeMessage() {
    //     this.setState({
    //         message : 'Good by!'
    //     })
    // }

    changeMessage = () => {
        this.setState({
            message : 'Good by !'
        })
    }

    render() {
        const {message} = this.state
        return (
            <div>
                <h2>{message}</h2>
                <button onClick={this.changeMessage}>Change message</button>
                {/* <button onClick={()=>this.changeMessage()}>Change message</button> */}
            </div>
        )
    }
}

export default EventBind
