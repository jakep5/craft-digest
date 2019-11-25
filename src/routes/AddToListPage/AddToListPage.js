import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import AddBeerForm from '../../components/AddBeerForm/AddBeerForm'
import AddBeerSearchResults from '../../components/AddBeerSearchResults/AddBeerSearchResults'
import exampleBeers from '../../store'
import './AddToListPage.css'

export default class AddToListPage extends Component {


    render() {
        return (
            <div>
                <nav role="navigation">
                    <Link to="/">
                        <p class="logOut">Log out</p>
                    </Link>
                </nav>
                <header role="banner">
                    <h1 class="addBeerTitle">Add a beer to your list!</h1>
                </header>
                <section className="addBeerSection">
                    <div className="addBeerSearchFormHolder">
                        <AddBeerForm handleSubmit={(newItem) => this.handleSubmit(newItem)}/>
                    </div>
                    {/* <div className="AddBeerSearchResultsHolder">
                        <AddBeerSearchResults handleSubmit={this.handleSubmit}/>
                    </div> */}
                </section>
                <footer role="returnToTop">
                    <Link to="/triedList">
                        <p>Return to tried list</p>
                    </Link>
                </footer>
            </div>
        )
    }
}
