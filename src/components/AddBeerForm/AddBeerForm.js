import React, { Component } from 'react'
import './AddBeerForm.css'
import { BeerContext } from '../../contexts/BeerContext'
import {withRouter} from 'react-router-dom'

class AddBeerForm extends Component {

    static contextType = BeerContext;

    handleSubmit = (e) => {
        e.preventDefault();

        const beerName = document.getElementById('beerName').value
        const beerBrewery = document.getElementById('beerBrewery').value
        const beerBreweryLocation = document.getElementById('beerBreweryLocation').value
        const beerTastingNotes = document.getElementById('beerTastingNotes').value
        const beerAbv = parseFloat(document.getElementById('beerAbv').value)
        const beerRating = parseFloat(document.getElementById('beerRating').value)


        const newItem = { 
            "name": beerName,
            "brewery_name": beerBrewery,
            "brewery_location": beerBreweryLocation,
            "tasting_notes":beerTastingNotes,
            "abv": beerAbv,
            "rating": beerRating,
            "user_id": this.context.userId
        }

        this.context.handleAddBeer(newItem)
        /* this.props.history.push('/triedList'); */
}

    render() {
        return (
                    <div className="addBeerHolder">
                        <form id="beerSearchForm" onSubmit={(e) => this.handleSubmit(e)} role="form">
                                <legend className="formLegend">Add a beer:</legend>

                                <label for="beerName" required>Name of beer:</label>
                                <input type="text" className="beerName beerInputField" id="beerName"/>

                                <label for="beerBrewery" required>Brewery:</label>
                                <input type="text" className="breweryName beerInputField" id="beerBrewery"/>

                                <label for="beerBreweryLocation" >Brewery location:</label>
                                <input type="text" className="breweryLocation beerInputField" id="beerBreweryLocation" />

                                <label for="beerTastingNotes" id="tastingNotes" required>Tasting notes:</label>
                                <textarea type="text" className="tastingNotes beerInputField" id="beerTastingNotes"/>

                                <label for="beerAbv" required>ABV:</label>
                                <input type="number" className="abvInput beerInputField" id="beerAbv" step=".01"/>

                                <label for="beerRating" required>Rating (out of 5):</label>
                                <input type="number" className="ratingInput beerInputField" id="beerRating" step=".01" max="5"/>

                                <label for="submitButton" required>{null}</label>
                                <input type="submit" value="Add beer" id="submitButton" />
     
                        </form>
                    </div>
        )
    }
}

export default withRouter(AddBeerForm);
