import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component {
    render() {
        return (
            <nav role="navigation">
                <Link to="/signUp">
                    <p id="signUp">Sign up</p>
                </Link>
                <Link to="/signin">
                    <p id="signIn">Sign in</p>
                </Link>
            </nav>
        )
    }
}