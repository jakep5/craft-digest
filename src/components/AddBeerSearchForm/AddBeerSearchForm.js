import React, { Component } from 'react'
import './AddBeerSearchForm.css'

export default class AddBeerSearchForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const { beerName, breweryName } = e.target;

        const searchTerms = { 
            beer: beerName,
            brewery: breweryName
        }
        this.props.handleSubmit(searchTerms)
    }

    render() {
        return (
            <div className="addBeerSearchFormHolder">
                <form id="beerSearchForm" onSubmit={(e) => this.handleSubmit(e)}>
                    <div class="nameSearch">
                        <label for="beerSearch">Name of beer:</label>
                        <input type="text" class="beerName"/>
                    </div>

                    <div class="brewerySearch">
                        <label for="beerSearchBrewery">Brewery:</label>
                        <input type="text" class="breweryName"/>
                    </div>
                    <button class="submitBeerForm" type="submit" for="beerSearchForm">Search!</button>
                </form>
            </div>
        )
    }
}
