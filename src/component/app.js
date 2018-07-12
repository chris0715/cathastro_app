import React from 'react'
import { Route, withRouter } from 'react-router-dom'
import LoginContainer from './LoginContainer'
import Header from './Header'
import ChatContainer from './ChatContainer'
import UserContainer from './UserContainer'

class App extends React.Component {
  state = {
    user: null
  }
  
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user })
      } else {
        this.props.history.push('/login')
      }
      
    })
  }
  
  render() {
    return (
      <div id='container'>
        <Route exact path='/' component={ChatContainer} />
        <Route path='/login' component={LoginContainer} />
        <Route path='/user/:id' component={UserContainer} />
      </div>
    )
  }
}

export default withRouter(App)
