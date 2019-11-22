import React, { Component } from 'react'
import './AddBeerForm.css'
import { BeerConsumer } from '../../contexts/BeerContext'
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

                                <label for="beerName">Name of beer:</label>
                                <input type="text" class="beerName" id="beerName"/>

                                <label for="beerBrewery">Brewery:</label>
                                <input type="text" class="breweryName" id="beerBrewery"/>

                                <label for="beerBreweryLocation">Brewery location:</label>
                                <input type="text" class="breweryLocation" id="beerBreweryLocation" />

                                <label for="beerTastingNotes" id="tastingNotes">Tasting notes:</label>
                                <textarea type="text" class="tastingNotes" id="beerTastingNotes"/>

                                <label for="beerAbv">ABV:</label>
                                <input type="number" class="abvInput" id="beerAbv" />

                            <button class="submitBeer" type="submit" for="beerSearchForm">Add!</button>
                        </form>
                    </div>
        )
    }
}