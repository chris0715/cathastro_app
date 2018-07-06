import React, { Component } from 'react'

class LoginContainer extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
    }
    state = {
        email:  '',
        password: '',
        error: ''
    }
    handleClick({target: {name, value}}) {
        this.setState({[name]: value})
        console.log(this.state)
    }
    handleSubmit(e) {
        e.preventDefault()
        if (this.state.email && this.state.password) {

        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }
    render() {
        return (
            <div id='LoginContainer'>
                <form>
                    <p>Sign in or sign up by entering your email and password. </p>
                    <input name='email' value={this.state.email} onChange={this.handleClick} placeholder='Your email' />
                    <input name='password' value={this.state.password} onChange={this.handleClick} placeholder='your password'/>
                    {this.state.error}
                    <button onClick={(e)=> this.handleSubmit(e)} className='red light'>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginContainer