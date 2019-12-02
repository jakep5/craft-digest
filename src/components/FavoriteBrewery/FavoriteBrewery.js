import React, { Component } from 'react'
import './FavoriteBrewery.css'
import {BeerContext} from '../../contexts/BeerContext'

export default class FavoriteBrewery extends Component {

    static contextType = BeerContext;

    render() {

        let breweryArray = [];

        let mostFrequent

        this.context.beers.map(beer => {
            breweryArray.push(beer.brewery_name)
        })

        if (breweryArray.length >= 2) {
            function mode(breweryArray) {
                return breweryArray.sort((a, b) => 
                    breweryArray.filter(v => v===a).length
                    - breweryArray.filter(v => v===b).length
                ).pop();
            }

            let mostFrequent = mode(breweryArray)

            return mostFrequent
        } else {
            mostFrequent = 'You must have at least 2 beers added to see favorite brewery'
        }
        

        return (
            <div className="favoriteBreweryHolder">
                {mostFrequent}
            </div>
        )
    }
}
