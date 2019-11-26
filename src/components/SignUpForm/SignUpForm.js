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
        const user_name = document.getElementById('signUpUsername').value
        const password = document.getElementById('signUpPassword').value

        this.setState({
            error: null
        })

        AuthApiServiceObject.registerUser({
            user_name: user_name,
            password: password
        })
            .then(user => {
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
                    <label for="signUpUsername">Username</label>
                    <input type="text" id="signUpUsername" />
                    <br />
                    <label for="signUpPassword">Password</label>
                    <input type="password" id="signUpPassword" />
                    <br />
                    <Link to="/triedList" style={{ textDecoration: 'none' }}>
                        <button type="submit" for="signUpForm" id="signUpButton">Submit</button>
                    </Link>
                </form>
            </>
        )
    }
}