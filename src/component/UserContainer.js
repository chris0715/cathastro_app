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
      

        <h1> Hello from the UserContainer </h1>
      </div>
    )
  }
}

export default UserContainer