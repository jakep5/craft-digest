import React, { Component } from 'react'
import './AddBeerForm.css'
import { BeerContext } from '../../contexts/BeerContext'

export default class AddBeerSearchForm extends Component {

    static contextType = BeerContext;

    handleSubmit = (e) => {
        e.preventDefault();
        const beerName = document.getElementById('beerName').value
        const beerBrewery = document.getElementById('beerBrewery').value
        const beerBreweryLocation = document.getElementById('beerBreweryLocation').value
        const beerTastingNotes = document.getElementById('beerTastingNotes').value
        const beerAbv = document.getElementById('beerAbv').value

        const newItem = { 
            "name": beerName,
            "brewery": beerBrewery,
            "brewery_location": beerBreweryLocation,
            "tasting_notes":beerTastingNotes,
            "abv": parseInt(beerAbv)
        }

        this.context.handleAddBeer(newItem)
    }

    render() {
        return (
                    <div className="addBeerHolder">
                        <form id="beerSearchForm" onSubmit={(e) => this.handleSubmit(e)}>
                                <legend className="formLegend">Add a beer:</legend>

                                <label for="beerName" required>Name of beer:</label>
                                <input type="text" class="beerName" id="beerName"/>

                                <label for="beerBrewery" required>Brewery:</label>
                                <input type="text" class="breweryName" id="beerBrewery"/>

                                <label for="beerBreweryLocation" required>Brewery location:</label>
                                <input type="text" class="breweryLocation" id="beerBreweryLocation" />

                                <label for="beerTastingNotes" id="tastingNotes" required>Tasting notes:</label>
                                <textarea type="text" class="tastingNotes" id="beerTastingNotes"/>

                                <label for="beerAbv" required>ABV:</label>
                                <input type="number" class="abvInput" id="beerAbv" step=".01"/>

                                <label for="submitButton" required>{null}</label>
                                <input type="submit" value="Add beer" id="submitButton" />
                               
                        </form>
                    </div>
        )
    }
}
