import React from 'react'
import { Link } from 'react-router-dom'
import BeerTriedList from '../../components/BeerTriedList/BeerTriedList'
import CommonTastingNotes from '../../components/CommonTastingNotes/CommonTastingNotes'
import FavoriteBrewery from '../../components/FavoriteBrewery/FavoriteBrewery'
import AverageAbv from '../../components/AverageAbv/AverageAbv'
import NumberOfBeersAdded from '../../components/NumberOfBeersAdded/NumberOfBeersAdded'
import './TriedList.css'

export default class TriedList extends React.Component {


    render () {

        return (
            <>
                <nav role="navigation">
                    <Link to="/randomBeer" style={{ textDecoration: 'none' }}>
                        <p id="recommendBeer">Recommend me a beer!</p>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p id="logOutLink">Log out</p>
                    </Link>
                </nav>
                <header role="banner">
                    <h1 className="triedList">Tried List</h1>
                    <Link to="/addBeer" style={{ textDecoration: 'none' }}>
                        <button id="addToTried"> + Add to list</button>
                    </Link>
                </header>

                <section id="section1">
                    <BeerTriedList triedBeers={this.props.triedBeers}/>
                    <p className="expandList">Click to see expanded list</p>
                </section>

                <section>
                    <h1 className="synopsis">Your beer synopsis:</h1>
    
                    <h3 className="averageAbv">Average ABV of saved beers:</h3>
                        <AverageAbv />
                    <h3 className="favoriteBrewery">Favorite brewery:</h3>
                        <FavoriteBrewery />
                    <h3 className="numberOfBeers">Number of beers tried:</h3>
                        <NumberOfBeersAdded />
                    <h3 className="commonTastingNotes">Common tasting notes:</h3>
                        <CommonTastingNotes />
                </section>
            </>
        )
    }
}