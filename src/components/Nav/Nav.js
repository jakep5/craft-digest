import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default class Nav extends React.Component {
    render() {
        return (
            <nav role="navigation">
                <i class="fas fa-beer" id="beerIcon"></i>
                <Link to="/signUp" style={{ textDecoration: 'none' }}>
                    <p id="signUp">Sign up</p>
                </Link>
                <Link to="/signin" style={{ textDecoration: 'none' }}>
                    <p id="signIn">Sign in</p>
                </Link>
            </nav>
        )
    }
}