import React, { Component } from "react";

export class ConditionalRendring extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedin: false
    };
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      isLoggedin: true
    });
  }
  render() {
    // if(this.state.isLoggedin)
    // return (
    //     <div>
    //         Hi EL khaldi
    //     </div>
    //     )
    // else
    //     return (
    //         <div>
    //             Hi Guest
    //             <button onClick={this.login}>Login</button>
    //         </div>
    //         )

    return this.state.isLoggedin ? (
      <div>Welcome El khaldi</div>
    ) : (
      <div>
        <div>Hi Guest</div>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}

export default ConditionalRendring;
