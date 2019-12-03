import React from 'react'
import { Link } from 'react-router-dom'
import { BeerContext } from '../../contexts/BeerContext'
import './SignInPage.css'
import SignInForm from '../../components/SignInForm/SignInForm'

export default class SignInPage extends React.Component {

    static defaultProps = {
        location: {},
        history: {
            push: () => {},
        },
    }

    static contextType = BeerContext

    handleLoginSuccess = () => {
        const { history } = this.props
        history.push('/triedList')
    }

    render() {
        return (
            <>
                <nav role="navigation">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p id="returnToHome">Return to homepage</p>
                    </Link>

                    <Link to="/signUp" style={{ textDecoration: 'none' }}>
                        <p id="signInLink">Sign up</p>
                    </Link>
                </nav>
                <header role="banner">
                    <h1>Sign in to Craft Digest!</h1>

                    <SignInForm onLoginSuccess={this.handleLoginSuccess}/>

                    <p>Dummy account:</p>
                    <p>Username: testuser</p>
                    <p>Password: !Testpassword1</p>

                </header>
            </>
        )
    }
}