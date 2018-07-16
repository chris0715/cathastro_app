import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Header from './Header'

class ChatContainer extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.scrollToBottom =  this.scrollToBottom.bind(this)
  }
  state = {
    newMessage: ''
  }
  componentDidMount() {
    this.scrollToBottom()
  }

  componentDidUpdate(previousProps) {
    if (previousProps.messages.length != this.props.messages.length) {
      this.scrollToBottom()
    }
  }
  scrollToBottom() {
    const messageContainer = ReactDOM.findDOMNode(this.messageContainer)
    if (messageContainer) {
      messageContainer.scrollTop = messageContainer.scrollHeight
    }
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
      {this.props.messagesLoaded ? (<div ref={element => this.messageContainer = element} id='message-container' >
        {this.props.messages.map((message, i) => (
          <div className={`message ' ${this.props.user.email == message.author && 'mine'}`} key={message.key}>
          <p>{message.msg}</p>
          {(!this.props.messages[i + 1] || this.props.messages[i + 1].author !== message.author) && 
            <p className='author'>
              <Link to={`/user/${message.user_id}`}>{message.author} </Link>
            </p>
          }
          
          </div>
        ))}
      </div>) : (<div id='loading-container'>
        <img src='/assets/icon.png' alt='logo' id='loader' />
      </div>) }
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