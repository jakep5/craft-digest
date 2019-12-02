import React from 'react'
import Nav from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <nav role="navigation">
                    <Nav />
                </nav>
                <header role="banner">
                    <h1>Craft Digest</h1>
                    <h2>Store, analyze, and reminisce over past beers while viewing your personalized beer trends.</h2>
                </header>

                <section>
                    <h2>Store your favorite beers</h2>
                    <h3>"Tried" list holds your past-tried beers, along with any infortmation you would like to store with the beer.</h3>
                </section>

                <section>
                    <h2>Analyze and view your beer-drinking habits</h2>
                    <h3>View data regarding the type of beer, style of beer, tasing notes, and ABV of your past beers.</h3>
                    <h4>Have Craft Digest suggest a beer for you using your recent beer choices!</h4>
                </section>

                <section>
                    <h2>Search for beers you would like to try!</h2>
                    <h3>Use our search function to scope out beers you would like to try, and preemptively add them to your list!</h3>
                </section>
                <section class="signUp">
                    <Link to="/signUp" style={{ textDecoration: 'none' }}>
                        <p id="signUpLinkLanding">Sign up</p>
                    </Link>
                    
                    <Link to="signIn" style={{ textDecoration: 'none' }}>
                        <p id="signInLinkLanding">Sign in</p>
                    </Link>
                </section>
            </>
        )
    }
}