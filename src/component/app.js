import React from 'react'
import LoginConainer from './LoginContainer'
import ChatContainer from './ChatContainer'
import Header from './Header'
import {Route, withRouter} from 'react-router-dom'

class App extends React.Component {

  state = {
    user: null
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({user})
      } else {
        this.props.history.push('/login')
      }
      
    })
  }
  render() {
    return (
      <div id='container'> 
        <Route exact path='/' component={ChatContainer} />
        <Route path='/login' component={LoginConainer} />
      </div>
    )
  }
}

export default withRouter(App)
