import React from 'react'
import { Link } from 'react-router-dom'
import { BeerContext } from '../../contexts/BeerContext'
import config from '../../config'
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
        this.context.setJustSignedUp();
        history.push('/triedList')
    }

    componentDidMount() {
        document.title = "Sign In Page"
    }

    render() {
        
        //Changes beer icon link destination depending on if user is logged in or not
        let ConditionalLink = window.sessionStorage.getItem(config.TOKEN_KEY) 
        ?   <Link to={'/triedList'}>
                <i class="fas fa-beer" id="beerIconSignIn" />
            </Link>
        :   <Link to={'/'}>
                <i class="fas fa-beer" id="beerIconSignIn" />
            </Link>

        return (
            <>
                <nav role="navigation" className="signIn">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p id="returnToHome">Return to homepage</p>
                    </Link>

                    {ConditionalLink}

                    <Link to="/signUp" style={{ textDecoration: 'none' }}>
                        <p id="signInLink">Sign up</p>
                    </Link>
                </nav>
                <div role="article" className="signInWrapper">
                    <div className="signInHolder">
                        <h1 className="signIn">Sign in to Craft Digest!</h1>

                        <SignInForm onLoginSuccess={this.handleLoginSuccess}/>
                    </div>
                </div>
            </>
        )
    }
}