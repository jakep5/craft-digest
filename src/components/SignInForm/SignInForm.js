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
        
        const user_name = document.getElementById('signInUsername').value;
        const password = document.getElementById('signInPassword').value;

        AuthApiServiceObject.logIn({
            user_name: user_name,
            password: password
        })
            .then(res => {
                user_name = ''
                password = ''
                TokenServiceObject.saveAuthToken(res.authToken)
                this.props.onLoginSuccess()
            })
            .catch(res => {
                this.setState({
                    error: res.error
                })
        })
    }

    render() {
        return (
            <>
                <form id="signInForm" onSubmit={(e) => this.handleSubmitAuthentication(e)}>
                    <legend>Sign in</legend>
                    <br />
                    <label for="signInUsername">Username</label>
                    <input type="text" id="signInUsername" />
                    <br />
                    <label for="signInPassword">Password</label>
                    <input type="password" id="signInPassword" />
                    <br />
                    <Link to="/triedList" style={{ textDecoration: 'none' }}>
                        <button type="submit" for="signInForm" id="logInButton">Log in</button>
                    </Link>
                </form>
            </>
        )
    }
}