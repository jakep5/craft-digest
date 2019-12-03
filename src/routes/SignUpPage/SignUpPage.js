import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpPage.css'
import SignUpForm  from '../../components/SignUpForm/SignUpForm'

export default class SignUpPage extends React.Component {

    static defaultProps = {
        history: {
            push: () => {}
        },
    }

    handleRegistrationSuccess = user => {
        const { history } = this.props
        history.push('/signIn')
    }

    render() {
        return (
            <>
                <nav role="navigation">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p id="returnToHome">Return to homepage</p>
                    </Link>
                    <Link to="/signIn" style={{ textDecoration: 'none' }}>
                        <p id="signInLink">Sign in</p>
                    </Link>
                </nav>
                <div role="banner" className="signUpWrapper">
                    <h1 className="signUp">Sign up for Craft Digest!</h1>

                    <SignUpForm onRegistrationSuccess={this.handleRegistrationSuccess}/>

                </div>
            </>
        )
    }
}