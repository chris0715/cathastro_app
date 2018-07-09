import React, { Component } from 'react'

class LoginContainer extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this)
        this.login = this.login.bind(this)
        this.signUp = this.signUp.bind(this)
    }
    state = {
        email: '',
        password: '',
        error: ''
    }
    handleClick({ target: { name, value } }) {
        this.setState({ [name]: value })
        console.log(this.state)
    }
    login() {
        this.setState({ error: '' })
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then()
            .catch(e => {
                if (e.code == 'auth/user-not-found') {
                    this.signUp()
                } else {
                    this.setState({ error: 'Error logging in' })
                }

            })
    }

    signUp() {
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                if (res.code == "auth/weak-password") {
                    this.setState({ error: res.message })
                }
                console.log(res)
            })
            .catch(e => {
                this.setState({ error: e.message })
            })
    }
    handleSubmit(e) {
        e.preventDefault()
        const { email, password } = this.state
        if (email && password) {
            this.login()
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }
    render() {
        return (
            <div id='LoginContainer'>
                <form>
                    <p>Sign in or sign up by entering your email and password. </p>
                    <input type='email' required={true} name='email' value={this.state.email} onChange={this.handleClick} placeholder='Your email' />
                    <input type='password' required={true} name='password' value={this.state.password} onChange={this.handleClick} placeholder='your password' />
                    <p className='error'>{this.state.error}</p>
                    <button onClick={(e) => this.handleSubmit(e)} className='red light'>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginContainer