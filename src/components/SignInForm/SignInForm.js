import React from 'react'
import { Link } from 'react-router-dom'
import TokenServiceObject from '../../services/token-service'
import './SignInForm.css'

export default class SignInForm extends React.Component {

    state = {
        error: null
    }

    handleSubmitAuthentication = e => {
        e.preventDefault();
        const user_name = document.getElementById('signInUsername').value;
        const password = document.getElementById('signInPassword').value;

        let token = TokenServiceObject.makeBasicAuthToken(user_name, password)

        TokenServiceObject.saveAuthToken(token)

        user_name = '';
        password = '';
        this.props.onLogInSuccess()

    }

    render() {
        return (
            <>
                <form id="signInForm">
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