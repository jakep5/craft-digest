import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpForm.css'

export default class SignUpForm extends React.Component {
    render() {
        return (
            <>
                <form id="signUpForm">
                    <legend>Sign up</legend>
                    <br />
                    <label for="signUpUsername">Username</label>
                    <input type="text" id="signUpUsername" />
                    <br />
                    <label for="signUpPassword">Password</label>
                    <input type="password" id="signUpPassword" />
                    <br />
                    <Link to="/triedList">
                        <button type="submit" for="signUpForm" id="signUpButton">Submit</button>
                    </Link>
                </form>
            </>
        )
    }
}