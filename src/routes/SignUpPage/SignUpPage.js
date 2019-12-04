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

    componentDidMount() {
        document.title = "Sign Up Page"
    }

    render() {
        return (
            <>
                <nav role="navigation">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p id="returnToHome">Return to homepage</p>
                    </Link>

                    <i class="fas fa-beer" id="beerIconSignIn"></i>

                    <Link to="/signIn" style={{ textDecoration: 'none' }}>
                        <p id="signInLink">Sign in</p>
                    </Link>
                </nav>
                <div role="article" className="signUpWrapper">
                    <h1 className="signUp">Sign up for Craft Digest!</h1>

                    <SignUpForm onRegistrationSuccess={this.handleRegistrationSuccess}/>

                </div>
            </>
        )
    }
}