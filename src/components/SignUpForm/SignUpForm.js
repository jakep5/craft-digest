import React from 'react'
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
                <div className="log-form">
                    <form 
                        id="signInForm" 
                        onSubmit={(e) => this.handleRegistrationSubmit(e)}
                    >
                        <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                        </div>
                        <input type="text" id="signInUsername" title="username" placeholder="username" name='user_name' required/>

                        <input type="password" id="signInPassword" title="username" placeholder="password" name='password' required/>

                        <button type="submit" htmlFor="signInForm" class="btn" id="logInButton">Sign up</button>
                    
                    </form>
                </div>
            </>
        )
    }
}