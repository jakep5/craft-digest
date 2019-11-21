import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './SignUpPage.css'
import SignUpForm  from '../../components/SignUpForm/SignUpForm'

export default class SignUpPage extends React.Component {
    render() {
        return (
            <>
                <nav role="navigation">
                    <Link to="/">
                        <a id="returnToHome">Return to homepage</a>
                    </Link>
                    <Link to="/signIn">
                        <a id="signInLink">Sign in</a>
                    </Link>
                </nav>
                <header role="banner">
                    <h1>Sign up for Craft Digest!</h1>

                    <SignUpForm />

                </header>
            </>
        )
    }
}