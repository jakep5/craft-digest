import React, { Component } from 'react'
import './AddBeerForm.css'

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
            <div className="addBeerHolder">
                <form id="beerSearchForm" onSubmit={(e) => this.handleSubmit(e)}>
                        <legend className="formLegend">Add a beer:</legend>
                        
                        <label for="beerName">Name of beer:</label>
                        <input type="text" class="beerName" id="beerName"/>

                        <label for="beerBrewery">Brewery:</label>
                        <input type="text" class="breweryName" id="beerBrewery"/>

                        <label for="beerBreweryLocation">Brewery location:</label>
                        <input type="text" class="breweryLocation" id="beerBreweryLocation" />

                        <label for="beerTastingNotes">Tasting notes:</label>
                        <input type="text" class="tastingNotes" id="beerTastingNotes"/>

                        <label for="beerAbv">ABV:</label>
                        <input type="number" class="abvInput" id="beerAbv" />

                    <button class="submitBeer" type="submit" for="beerSearchForm">Add!</button>
                </form>
            </div>
        )
    }
}
