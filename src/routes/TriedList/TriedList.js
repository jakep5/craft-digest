import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import BeerTriedList from '../../components/BeerTriedList/BeerTriedList'
import FavoriteBeerType from '../../components/FavoriteBeerType/FavoriteBeerType'
import FavoriteBrewery from '../../components/FavoriteBrewery/FavoriteBrewery'
import AverageAbv from '../../components/AverageAbv/AverageAbv'
import './TriedList.css'

export default class TriedList extends React.Component {


    render () {

        return (
            <>
                <nav role="navigation">
                    <Link to="/randomBeer">
                        <a id="recommendBeer">Recommend me a beer!</a>
                    </Link>
                    <Link to="/">
                        <a id="logOutLink">Log out</a>
                    </Link>
                </nav>
                <header role="banner">
                    <h1 class="triedList">Tried List</h1>
                    <Link to="/addBeer">
                        <button id="addToTried"> + Add to list</button>
                    </Link>
                </header>

                <section id="section1">
                    <BeerTriedList triedBeers={this.props.triedBeers}/>
                    <a class="expandList">Click to see expanded list</a>
                </section>

                <section>
                    <h1 class="synopsis">Your beer synopsis:</h1>
    
                    <h3 class="favoriteBeer">Favorite beer type:</h3>
                        <FavoriteBeerType />
                    <h3 class="favoriteBrewery">Favorite brewery:</h3>
                        <FavoriteBrewery />
                    <h3 class="averageAbv">Average ABV of saved beers:</h3>
                        <AverageAbv />
                </section>
            </>
        )
    }
}