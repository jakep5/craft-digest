import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import AddBeerForm from '../../components/AddBeerForm/AddBeerForm'
import './AddToListPage.css'
import TokenServiceObject from '../../services/token-service'

export default class AddToListPage extends Component {

    handleLogoutClick = () => {
        TokenServiceObject.clearAuthToken();
    }

    componentDidMount() {
        document.title = "Add Beer To Tried List";
    }

    render() {

        //Changes beer icon link destination depending on if user is logged in or not
        let ConditionalLink = window.sessionStorage.getItem(config.TOKEN_KEY) 
        ?   <Link to={'/triedList'}>
                <i class="fas fa-beer" id="beerIconSignIn" />
            </Link>
        :   <Link to={'/'}>
                <i class="fas fa-beer" id="beerIconSignIn" />
            </Link>

        return (
            <div>
                <nav role="navigation" className="addToListNav">

                    {ConditionalLink}

                    <Link to="/" 
                        style={{ textDecoration: 'none' }}
                        onClick={this.handleLogoutClick}
                    >
                        <p class="logOut">Log out</p>
                    </Link>

                </nav>

                <header role="banner">
                    <h1 class="addBeerTitle">Add a beer to your list!</h1>
                </header>

                <section className="addBeerSection">
                    <div className="addBeerSearchFormHolder">
                        <AddBeerForm />
                    </div>
                </section>

                <footer role="button">
                    <Link to="/triedList" style={{ textDecoration: 'none' }}>
                        <p>Return to tried list</p>
                    </Link>
                </footer>
                
            </div>
        )
    }
}
