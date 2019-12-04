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

                    <i class="fas fa-beer" id="beerIconSignIn"></i>

                    <Link to="/signUp" style={{ textDecoration: 'none' }}>
                        <p id="signInLink">Sign up</p>
                    </Link>
                </nav>
                <div role="banner" className="signInWrapper">
                    <div className="signInHolder">
                        <h1 className="signIn">Sign in to Craft Digest!</h1>

                        <SignInForm onLoginSuccess={this.handleLoginSuccess}/>
                    </div>
                </div>
            </>
        )
    }
}