import React from 'react'
import LoginConainer from './LoginContainer'
import Header from './Header'

class App extends React.Component {

  render() {
    return (
      <div id='container' className='inner-container'> 
       <Header />
       <LoginConainer />
      </div>
    )
  }
}

export default App
