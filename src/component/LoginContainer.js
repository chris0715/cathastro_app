import React, { Component } from 'react'
import Header from './Header';

class LoginContainer extends Component {
    constructor(){
        super()
        this.handleClick = this.handleClick.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    state = {
        email:  '',
        password: '',
        error: ''
    }
    handleClick({target: {name, value}}) {
        this.setState({[name]: value})
    }
    handleSubmit(e) {
        e.preventDefault()
        if (this.state.email && this.state.password) {
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(res => {
                if (res.code == '') {

                }
                console.log(res)
            })
            .catch(err => {
              if (err.code = "auth/user-not-found") {
                firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
              }
              console.log('err', err)
            })
        } else {
            this.setState({ error: 'Please fill in both fields' })
        }
    }
    render() {
        return (
            <div id='LoginContainer'>
                <Header />
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