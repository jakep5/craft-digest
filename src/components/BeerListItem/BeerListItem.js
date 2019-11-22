import React, { Component } from 'react'
import './BeerListItem.css'

export default class BeerListItem extends Component {

    render() {
        return (
            <div class="beerListItemHolder">
                <h3 className="beerName">{this.props.beerName}</h3>
                <p className="beerBrewery">Brewery: {this.props.beerBrewery}</p>
                <p className="beerBreweryLocation">Brewery location: {this.props.beerBreweryLocation}</p>
                <p className="beerTastingNotes">Tasting notes: {this.props.beerTastingNotes}</p>
                <p className="beerAbv">ABV: {this.props.beerAbv}</p>
            </div>
        )
    }
}
