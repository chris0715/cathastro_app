import React from 'react'
import { Link } from 'react-router-dom'
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
    this.props.handleSubmit(this.state.newMessage)
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
      <div id='message-container' >
        {this.props.messages.map(message => (
          <div className={`message ' ${this.props.user.email == message.author && 'mine'}`} key={message.key}>
          <p>{message.msg}</p>
          <p className='author'>
            <Link to={`/user/${message.user_id}`}>{message.author} </Link>
          </p>
          </div>
        ))}
      </div>
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