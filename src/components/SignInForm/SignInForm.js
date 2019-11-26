import React from 'react'
import { Link } from 'react-router-dom'
import TokenServiceObject from '../../services/token-service'
import AuthApiServiceObject from '../../services/auth-api-service'
import './SignInForm.css'

export default class SignInForm extends React.Component {

    static defaultProps = {
        onLoginSuccess: () => {} 
    }

    state = {
        error: null
    }

    handleSubmitAuthentication = e => {
        e.preventDefault();

        this.setState({
            error: null
        });
        
        let { user_name, password } = e.target


        AuthApiServiceObject.logIn({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                TokenServiceObject.saveAuthToken(res.authToken)
             })
            .then(user_name = '')
            .then(password = '')
            .then(this.props.onLoginSuccess())
            .then(console.log('here'))
            .catch(res => {
                this.setState({
                    error: res.error
                })
        })
    }

    render() {

        const { error } = this.state

        return (
            <>
                <form 
                    id="signInForm" 
                    onSubmit={(e) => this.handleSubmitAuthentication(e)}
                >
                    <div role='alert'>
                      {error && <p className='red'>{error}</p>}
                    </div>
                    <legend>Sign in</legend>
                    <br />
                    <label htmlFor="signInUsername">Username</label>
                    <input type="text" id="signInUsername" name='user_name' />
                    <br />
                    <label htmlFor="signInPassword">Password</label>
                    <input type="password" id="signInPassword" name='password'/>
                    <br />
                    <button type="submit" htmlFor="signInForm" id="logInButton">Log in</button>
                </form>
            </>
        )
    }
}