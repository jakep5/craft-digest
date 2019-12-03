import React from 'react'
import { Link } from 'react-router-dom'
import TokenServiceObject from '../../services/token-service'
import AuthApiServiceObject from '../../services/auth-api-service'
import './SignInForm.css'

export default class SignInForm extends React.Component {

    static defaultProps = {
        onLoginSuccess: () => {} 
    }

    state = {
        error: null
    }

    handleSubmitAuthentication = e => {
        e.preventDefault();

        this.setState({
            error: null
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
                this.props.onLoginSuccess()
             })
            .catch(res => {
                this.setState({
                    error: res.error
            })
        })
    }

    render() {

        const { error } = this.state

        return (
            <>
                <div className="log-form">
                    <form 
                        id="signInForm" 
                        onSubmit={(e) => this.handleSubmitAuthentication(e)}
                    >
                        <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                        </div>
                         <input type="text" id="signInUsername" title="username" placeholder="username" name='user_name' required/>

                         <input type="password" id="signInPassword" title="username" placeholder="password" name='password' required/>

                         <button type="submit" htmlFor="signInForm" class="btn" id="logInButton">Log in</button>
                    </form>
                </div>
            </>
        )
    }
}