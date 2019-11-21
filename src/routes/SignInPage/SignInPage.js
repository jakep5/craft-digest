import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import './SignInPage.css'
import SignInForm from '../../components/SignInForm/SignInForm'

export default class SignInPage extends React.Component {
    render() {
        return (
            <>
                <nav role="navigation">
                    <Link to="/">
                        <a id="returnToHome">Return to homepage</a>
                    </Link>

                    <Link to="/signUp">
                        <a id="signInLink">Sign up</a>
                    </Link>
                </nav>
                <header role="banner">
                    <h1>Sign in to Craft Digest!</h1>

                    <SignInForm />

                </header>
            </>
        )
    }
}