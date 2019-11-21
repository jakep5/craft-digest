import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './SignInForm.css'

export default class SignInForm extends React.Component {
    render() {
        return (
            <>
                <form id="signInForm">
                    <legend>Sign in</legend>
                    <br />
                    <label for="signInUsername">Username</label>
                    <input type="text" id="signUpUsername" />
                    <br />
                    <label for="signInPassword">Password</label>
                    <input type="password" id="signInPassword" />
                    <br />
                    <Link to="/triedList">
                        <button type="submit" for="signInForm">Log in</button>
                    </Link>
                </form>
            </>
        )
    }
}