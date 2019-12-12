import React from 'react'
import TokenServiceObject from '../../services/token-service'
import AuthApiServiceObject from '../../services/auth-api-service'
import BeerContext, { BeerConsumer } from '../../contexts/BeerContext'
import BarLoader from 'react-spinners/BarLoader'
import { css } from '@emotion/core'
import './SignInForm.css'

export default class SignInForm extends React.Component {

    static defaultProps = {
        onLoginSuccess: () => {} 
    }

    state = {
        error: null,
        isLoading: false,
        testIsLoading: true
    }

    static contextType = BeerContext;

    handleSubmitAuthentication = e => {
        e.preventDefault();


        this.setState({
            error: null,
            isLoading: true
        });


        
        let { user_name, password } = e.target


        AuthApiServiceObject.logIn({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = ''
                password.value = ''
                TokenServiceObject.saveAuthToken(res.authToken)
                this.setState({
                    isLoading: false
                })
                this.props.onLoginSuccess()
             })
            .catch(res => {
                this.setState({
                    error: res.error,
                    isLoading: false
            })
        })
    }

    render() {

        const override = css`
            display: block;
            margin-top: 50%;
            border-color: grey;
        `;

        let isLoading = this.state.isLoading
            
        const { error } = this.state

        return (
                    <>
                        <div className="log-form log-form fade-in" role="form">
                            <form 
                                id="signInForm" 
                                onSubmit={(e) => this.handleSubmitAuthentication(e)}
                            >
                                <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                                </div>

                                {this.context.justSignedUp && <p className="justSignedUp">Thanks for signing up! Please log in:</p>}

                                <label htmlFor="signInUsername">Username</label>
                                <input type="text" id="signInUsername" title="username" placeholder="username" name='user_name' required/>

                                <label htmlFor="signInPassword">Password</label>
                                <input type="password" id="signInPassword" title="password" placeholder="password" name='password' required/>

                                <button type="submit" htmlFor="signInForm" class="signInButton" id="logInButton">Sign in</button>
                                <div className='loadingHolder'>
                                    <BarLoader
                                        css={override}
                                        sizeUnit={"px"}
                                        size={75}
                                        color={'#808080'}
                                        loading={isLoading}
                                    />
                                </div>

                                <div className="dummy" role="article">
                                    <p className="dummy">Demo account:</p>
                                    <p className="dummy">Username: testuser</p>
                                    <p className="dummy">Password: !Testpassword1</p>
                                </div>
                            </form>
                        </div>
                    </>
        )
    }
}