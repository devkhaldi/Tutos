import React, { Component } from 'react'

export class ClassComponent extends Component {
    render() {
        return (
            <div>
                <h3>Welcome : { this.props.name}</h3>

                {this.props.children}
            </div>
        )
    }
}

export default ClassComponent
