import React, { Component } from 'react'

class LoginContainer extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    state = {
        email:  '',
        password: ''
    }
    handleClick({target: {name, value}}) {
        this.setState({[name]: value})
        console.log(this.state)
    }
    handleSubmit(e) {
        e.preventDefault()
    }
    render() {
        return (
            <div id='LoginContainer'>
                <form>
                    <p>Sign in or sign up by entering your email and password. </p>
                    <input name='email' value={this.state.email} onChange={this.handleClick} placeholder='Your email' />
                    <input name='password' value={this.state.password} onChange={this.handleClick} placeholder='your password'/>
                    <button onClick={(e)=> this.handleSubmit(e)} className='red light'>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginContainer