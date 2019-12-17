import React from 'react'
import { Link } from 'react-router-dom'
import config from '../../config'
import BeerTriedList from '../../components/BeerTriedList/BeerTriedList'
import CommonTastingNotes from '../../components/CommonTastingNotes/CommonTastingNotes'
import FavoriteBrewery from '../../components/FavoriteBrewery/FavoriteBrewery'
import AverageAbv from '../../components/AverageAbv/AverageAbv'
import NumberOfBeersAdded from '../../components/NumberOfBeersAdded/NumberOfBeersAdded'
import './TriedList.css'
import TokenServiceObject from '../../services/token-service'

export default class TriedList extends React.Component {
    handleLogoutClick = () => {
        TokenServiceObject.clearAuthToken();
    }

    componentDidMount() {
        document.title = "Craft Digest Tried List";
    }

    render () {

        //Changes beer icon link destination depending on if user is logged in or not
        let ConditionalLink = window.sessionStorage.getItem(config.TOKEN_KEY)
        ?   <Link to={'/triedList'}>
                <i class="fas fa-beer" id="beerIconSignIn" />
            </Link>
        :   <Link to={'/'}>
                <i class="fas fa-beer" id="beerIconSignIn" />
            </Link>

        return (
            <>
                <nav role="navigation" className="triedListNav">

                    {ConditionalLink}

                    <Link 
                        to="/" 
                        style={{ textDecoration: 'none' }}
                        onClick={this.handleLogoutClick}
                    >
                        <p id="logOutLink">Log out</p>
                    </Link>
                </nav>
                <header role="banner" className="triedList">
                    <h1 className="triedList">Tried List</h1>
                    <Link to="/addBeer" style={{ textDecoration: 'none' }} id="addToList" className="hvr-float-shadow">
                        <button id="addToTried" className="hvr-float-shadow"> + Add to list</button>
                    </Link>
                </header>

                <section id="section1" className="fade-in" role="list">
                    <BeerTriedList triedBeers={this.props.triedBeers}/>
                </section>

                <section role="contentinfo">
                    <h1 className="synopsis">Your beer synopsis:</h1>

                    <div className="statWrapper">
                        <div className="statItem">
                            <h3 className="averageAbv">Average ABV of saved beers:</h3>
                                <AverageAbv />
                        </div>
                        <div className="statItem">
                            <h3 className="favoriteBrewery">Favorite brewery:</h3>
                                <FavoriteBrewery />
                        </div>
                        <div className="statItem">
                        <h3 className="numberOfBeers">Number of beers tried:</h3>
                            <NumberOfBeersAdded />
                        </div>
                        
                    </div>
                    <div className="tastingNotes">
                            <h3 className="commonTastingNotes">Common tasting notes:</h3>
                                <CommonTastingNotes />
                        </div>
                </section>
            </>
        )
    }
}