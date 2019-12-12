import React from 'react'
import AuthApiServiceObject from '../../services/auth-api-service'
import './SignUpForm.css'
import BeerContext from '../../contexts/BeerContext'
import BarLoader from 'react-spinners/BarLoader'
import { css } from '@emotion/core'

export default class SignUpForm extends React.Component {

    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    static contextType = BeerContext;

    state = {
        error: null,
        isLoading: false
        
    }

    handleRegistrationSubmit = (e) => {
        e.preventDefault()
        
        let { user_name, password } = e.target

        this.setState({
            error: null,
            isLoading: true
        })

        AuthApiServiceObject.registerUser({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name  = ''
                password = ''
                this.props.onRegistrationSuccess()
                this.setState({
                    isLoading: false
                })
            })
            .then(this.context.setJustSignedUp)
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

        const { error } = this.state

        let isLoading = this.state.isLoading

        return (
            <>
                <div className="log-form log-formSignUp fade-in" role="form">
                    <form 
                        id="signInForm" 
                        onSubmit={(e) => this.handleRegistrationSubmit(e)}
                    >
                        <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                        </div>

                        <label htmlFor="signUpUsername">Username</label>
                        <input type="text" id="signUpUsername" title="username" placeholder="username" name='user_name' required/>


                        <label htmlFor="signUpPassword">Password</label>
                        <input type="password" id="signUpPassword" title="password" placeholder="password" name='password' required/>

                        <div className='signUpLoadingHolder'>
                            <BarLoader
                                css={override}
                                sizeUnit={"px"}
                                size={75}
                                color={'#808080'}
                                loading={isLoading}
                            />
                        </div>

                        <button type="submit" htmlFor="signInForm" class="btn signUpButton" id="signUpButton">Sign up</button>

                        <p className="passwordInfo">Passwords must meet the following criteria:</p>
                            <ul className="passwordInfo">
                                <li>Contain at least 8 characters</li>
                                <li>Contain at least 1 upper case letter</li>
                                <li>Contain at least 1 lower case letter</li>
                                <li>Contain at least 1 number</li>
                                <li>Contain at least 1 special character</li>
                            </ul>
                    
                    </form>
                </div>
            </>
        )
    }
}