import React from 'react'
import { Link } from 'react-router-dom'
import './SignUpPage.css'
import BeerContext from '../../contexts/BeerContext'
import config from '../../config'
import SignUpForm  from '../../components/SignUpForm/SignUpForm'

export default class SignUpPage extends React.Component {

    static defaultProps = {
        history: {
            push: () => {}
        },
    }

    static contextType = BeerContext;

    handleRegistrationSuccess = user => {
        const { history } = this.props
/*         this.context.setJustSignedUp() */
        history.push('/signIn')
    }

    componentDidMount() {
        document.title = "Sign Up Page"
    }

    render() {

        let ConditionalLink = window.sessionStorage.getItem(config.TOKEN_KEY) 
            ?   <Link to={'/triedList'}>
                    <i class="fas fa-beer" id="beerIconSignIn" />
                </Link>
            :   <Link to={'/'}>
                    <i class="fas fa-beer" id="beerIconSignIn" />
                </Link>

        return (
            <>
                <nav role="navigation" className="signUp">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p id="returnToHome">Return to homepage</p>
                    </Link>

                    {ConditionalLink}

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