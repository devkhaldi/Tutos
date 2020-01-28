import React, { Component } from 'react'

export class CreateProject extends Component {
  state = {
    title: '',
    content: ''
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
          <h5 className='grey-text text-darken-3'>Create new project</h5>
          <div className='input-field'>
            <label htmlFor='title'>Title</label>
            <input type='text' id='title' onChange={this.handelChange} value={this.state.title} />
          </div>

          <div className='input-field'>
            <label htmlFor='content'>Project Content</label>
            <textarea
              id='content'
              className='materialize-textarea'
              onChange={this.handelChange}
              value={this.state.content}></textarea>
          </div>
          <div className='input-field'>
            <button type='submit' className='btn pink lighten-1'>
              CREATE PROJECT
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default CreateProject
