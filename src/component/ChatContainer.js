import React from 'react'
import Header from './Header'

class ChatContainer extends React.Component {
  state = {

  }

render() {
    return (
        <div id='ChatContainer'>
          <Header />
          <h1>Hello from chatContainer</h1>
        </div>
        )
    }
}

export default ChatContainer