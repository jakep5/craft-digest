import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
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
                    <div class="leftList">

                        <h3 class="beerList">Beer 1</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

                        <h3 class="beerList">Beer 2</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

                        <h3 class="beerList">Beer 3</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

                        <h3 class="beerList">Beer 4</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

                        <h3 class="beerList">Beer 5</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

                    </div>
                    <div class="rightList">

                        <h3 class="beerList">Beer 6</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

                        <h3 class="beerList">Beer 7</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

                        <h3 class="beerList">Beer 8</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

                        <h3 class="beerList">Beer 9</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

                        <h3 class="beerList">Beer 10</h3>
                        <p>Brewery/loc: ____</p>
                        <p>Tasting notes: ____</p>
                        <p>Hop/malt/etc content: ____</p>

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