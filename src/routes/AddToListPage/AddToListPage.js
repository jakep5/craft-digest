import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import AddBeerSearchForm from '../../components/AddBeerSearchForm/AddBeerSearchForm'
import AddBeerSearchResults from '../../components/AddBeerSearchResults/AddBeerSearchResults'
import './AddToListPage.css'

export default class AddToListPage extends Component {
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
                        <AddBeerSearchForm />
                    </div>
                    <div className="AddBeerSearchResultsHolder">
                        <AddBeerSearchResults />
                    </div>
                </section>
                <footer role="returnToTop">
                    <a>Return to top</a>
                </footer>
            </div>
        )
    }
}
