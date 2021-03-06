import React, { Component } from 'react'

export class Signup extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handelChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handelSubmit = e => {
    e.preventDefault()
    console.log(this.state)
  }
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handelSubmit} className='white' autoComplete='off'>
          <h5 className='grey-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              onChange={this.handelChange}
              value={this.state.email}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              onChange={this.handelChange}
              value={this.state.password}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='firstName'>First Name</label>
            <input
              type='text'
              id='firstName'
              onChange={this.handelChange}
              value={this.state.firstName}
            />
          </div>
          <div className='input-field'>
            <label htmlFor='lastName'>Last Name</label>
            <input
              type='text'
              id='lastName'
              onChange={this.handelChange}
              value={this.state.lastName}
            />
          </div>
          <div className='input-field'>
            <button type='submit' className='btn pink lighten-1'>
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Signup
