import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component {
    render() {
        return (
            <nav role="navigation">
                <Link to="/signUp">
                    <a id="signUp">Sign up</a>
                </Link>
                <Link to="/signin">
                    <a id="signIn">Sign in</a>
                </Link>
            </nav>
        )
    }
}