import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import AddBeerForm from '../../components/AddBeerForm/AddBeerForm'
import AddBeerSearchResults from '../../components/AddBeerSearchResults/AddBeerSearchResults'
import './AddToListPage.css'

export default class AddToListPage extends Component {

    /* handleSubmit = (searchTerms) => {
        const beer = searchTerms.beer;
        const brewery = searchTerms.brewery;

        fetch()
    } */

    render() {
        return (
            <div>
                <nav role="navigation">
                    <Link to="/">
                        <a class="logOut">Log out</a>
                    </Link>
                </nav>
                <header role="banner">
                    <h1 class="addBeerTitle">Add a beer to your list:</h1>
                </header>
                <section className="addBeerSection">
                    <div className="addBeerSearchFormHolder">
                        <AddBeerForm />
                    </div>
                    {/* <div className="AddBeerSearchResultsHolder">
                        <AddBeerSearchResults handleSubmit={this.handleSubmit}/>
                    </div> */}
                </section>
                <footer role="returnToTop">
                    <a>Return to top</a>
                </footer>
            </div>
        )
    }
}
