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
  }
  state = {
    user: null
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
      console.log(snapshot.val())
    })
  }
  
  render() {
    return (
      <div id='container'>
        <Route exact path='/' render={() => <ChatContainer handleSubmit={this.handleSubmit} />}  />
        <Route path='/login' component={LoginContainer} />
        <Route path='/user/:id' component={UserContainer} />
      </div>
    )
  }
}

export default withRouter(App)
