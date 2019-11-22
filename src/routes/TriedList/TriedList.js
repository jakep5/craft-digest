import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import BeerSearchList from '../../components/BeerSearchList/BeerSearchList'
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
                    <button id="addToTried"> + Add to list</button>
                </header>

                <section id="section1">
                    <div class="searchResults">
                        <BeerSearchList />
                    </div>
                    <a class="expandList">Click to see expanded list</a>
                </section>

                <section>
                    <h1 class="synopsis">Your beer synopsis:</h1>


                    <h3 class="favoriteBeer">Favorite beer type:</h3>


                    <h3 class="favoriteBrewery">Favorite brewery:</h3>


                    <h3 class="averageAbv">Average ABV of saved beers:</h3>
                </section>
            </>
        )
    }
}