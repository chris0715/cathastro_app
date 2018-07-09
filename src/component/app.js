import React from 'react'
import LoginConainer from './LoginContainer'
import Header from './Header'

class App extends React.Component {
  state = {
    user: null
  }

  componentDidMount() {
    window.addEventListener('onpopstate', () => console.log('test'))

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user })
    })
  }

  render() {
    return (
      <div id='container' className='inner-container'>
        <Header>
          klk
        </Header>
        <LoginConainer />
      </div>
    )
  }
}

export default App
