import React from 'react'

const Header = (props) => (
    <div id='Header'>
        <img src='/assets/icon.png' alt='logo' />
        <h1>Cathastrophe</h1>
        {props.children}
    </div>
)

export default Header