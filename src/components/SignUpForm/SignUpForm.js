import React from 'react'
import { Link } from 'react-router-dom'
import AuthApiServiceObject from '../../services/auth-api-service'
import './SignUpForm.css'

export default class SignUpForm extends React.Component {

    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = {
        error: null
    }

    handleRegistrationSubmit = (e) => {
        e.preventDefault()
        
        let { user_name, password } = e.target

        this.setState({
            error: null
        })

        AuthApiServiceObject.registerUser({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name  = ''
                password = ''
                this.props.onRegistrationSuccess()
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
                <form id="signUpForm" onSubmit={(e) => this.handleRegistrationSubmit(e)}>
                    <div role='alert'>
                      {error && <p className='red'>{error}</p>}
                    </div>
                    <legend>Sign up</legend>
                    <br />
                    <label htmlFor="signUpUsername">Username</label>
                    <input type="text" id="signUpUsername" name='user_name' required/>
                    <br />
                    <label htmlFor="signUpPassword">Password</label>
                    <input type="password" id="signUpPassword" name='password' required/>
                    <br />
                    <button type="submit" htmlFor="signUpForm" id="signUpButton">Submit</button>
                </form>
            </>
        )
    }
}