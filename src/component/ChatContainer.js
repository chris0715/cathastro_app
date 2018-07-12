import React from 'react'
import Header from './Header'

class ChatContainer extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  state = {
    newMessage: ''
  }
  
  handleLogout() {
    firebase.auth().signOut()
  }
  handleChange({ target: { value } }) {
    this.setState({ newMessage: value })
  }
  handleSubmit() {
    console.log('hey')
    this.setState({ newMessage: '' })
  }

  handleKeyDown(e) {
    if (e.key == 'Enter') {
      e.preventDefault()
      this.handleSubmit()
    }
  }
  render() {
    return (
      <div id='ChatContainer' className='inner-container'>
      <Header>
        <button className='red' onClick={this.handleLogout}>Logout</button>
      </Header>
      <h1>Hello from chatContainer</h1>
      <div id='message-container'></div>
      <div id='chat-input'>
      
        <textarea value={ this.state.newMessage } onKeyDown={this.handleKeyDown} name='newMessage' onChange={this.handleChange} placeholder='add your message...' />
        <button onClick={this.handleSubmit}>
          <svg viewBox='0 0 24 24'>
            <path fill='#424242' d='M2,21L23,12L2,3V10L17,12L2,14V21Z' />
          </svg>
        </button>
      </div>
      </div>
    )
  }
}

export default ChatContainer