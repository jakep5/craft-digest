import React, { Component } from 'react'
import './FavoriteBrewery.css'
import {BeerContext} from '../../contexts/BeerContext'

export default class FavoriteBrewery extends Component {

    static contextType = BeerContext;

    render() {

        let breweryArray = [];

        this.context.beers.map(beer => {
            breweryArray.push(beer.brewery_name)
        })

        function mode(breweryArray) {
            return breweryArray.sort((a, b) => 
                breweryArray.filter(v => v===a).length
                - breweryArray.filter(v => v===b).length
            ).pop();
        }

        let mostFrequent = mode(breweryArray)

        return (
            <div className="favoriteBreweryHolder">
                {mostFrequent}
            </div>
        )
    }
}
