import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import LoginContainer from './LoginContainer'
import Header from './Header'
import ChatContainer from './ChatContainer'
import UserContainer from './UserContainer'

class App extends React.Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onMessage = this.onMessage.bind(this)
  }
  state = {
    user: null,
    messages: [],
    messagesLoaded: false
  }
  
  onMessage(snapshot) {
    const messages = Object.keys(snapshot).map(key => {
      const msg = snapshot[key]
      msg.id = key
      return msg
    })
    this.setState({ messages })
  }

  handleSubmit(msg) {
    const data = {
      msg,
      author: this.state.user.email,
      user_id: this.state.user.uid,
      timestamp: Date.now()
    }
    firebase.database().ref('messages/').push(data)
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.props.history.push('/login')
      }
      
    })

    firebase.database().ref('/messages')
    .on('value', snapshot => {
      this.onMessage(snapshot.val())
      if (!this.state.messagesLoaded) {
        this.setState({messagesLoaded: true})
      }
      //console.log(snapshot.val())
    })
  }
  
  render() {
    return (
      <div id='container'>
        <Route exact path='/' render={() => <ChatContainer messagesLoaded={this.state.messagesLoaded}  messages={this.state.messages} user={this.state.user} handleSubmit={this.handleSubmit} />}  />
        <Route path='/login' component={LoginContainer} />
        <Route path='/user/:id' render={({history, match}) =>  <UserContainer messagesLoaded={this.state.messagesLoaded} user={this.state.user} messages={this.state.messages} userID={match.params.id} />} />
      </div>
    )
  }
}

export default withRouter(App)
