import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header';


class UserContainer extends React.Component {

  render() {
    return (
      <div id='UserContainer'>
      <Header>
        <Link to='/' >
          <button className='red'>BACK TO CHAT</button>
        </Link>
      </Header>
      {this.props.messagesLoaded ? (<div ref={element => this.messageContainer = element} id='message-container' >
        {this.props.messages.map((message, i) => {
          if (message.user_id == this.props.userID) {
            return <div className={`message ' ${this.props.user.email == message.author && 'mine'}`} key={message.key}>
            <p>{message.msg}</p>
            {(!this.props.messages[i + 1] || this.props.messages[i + 1].author !== message.author) && 
              <p className='author'>
                <Link to={`/user/${message.user_id}`}>{message.author} </Link>
              </p>
            }
            
            </div>
          }
          
        })}
      </div>) : (<div id='loading-container'>
        <img src='/assets/icon.png' alt='logo' id='loader' />
      </div>) }
      </div>
    )
  }
}

export default UserContainer