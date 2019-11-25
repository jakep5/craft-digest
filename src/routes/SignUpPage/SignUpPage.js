import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpPage.css'
import SignUpForm  from '../../components/SignUpForm/SignUpForm'

export default class SignUpPage extends React.Component {
    render() {
        return (
            <>
                <nav role="navigation">
                    <Link to="/">
                        <p id="returnToHome">Return to homepage</p>
                    </Link>
                    <Link to="/signIn">
                        <p id="signInLink">Sign in</p>
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