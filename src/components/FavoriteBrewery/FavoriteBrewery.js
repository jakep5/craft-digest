import React, { Component } from 'react'
import './FavoriteBrewery.css'
import {BeerContext} from '../../contexts/BeerContext'

export default class FavoriteBrewery extends Component {

    static contextType = BeerContext;

    hasDuplicates = (breweryArray) => {
        var valuesSoFar = Object.create(null);
        for (var i = 0; i < breweryArray.length; ++i) {
            var value = breweryArray[i];
            if (value in valuesSoFar) {
                return true;
            }
            valuesSoFar[value] = true;
        }
        return false;
    }

    render() {

        let breweryArray = [];

        let mostFrequent

        this.context.beers.map(beer => {
            breweryArray.push(beer.brewery_name)
        })

        if (this.hasDuplicates(breweryArray)) {
            function mode(breweryArray) {
                return breweryArray.sort((a, b) => 
                    breweryArray.filter(v => v===a).length
                    - breweryArray.filter(v => v===b).length
                ).pop();
            }

            let mostFrequent = mode(breweryArray)

            return mostFrequent
        } else {

            mostFrequent = 'You must have at least 2 beers from the same brewery to have a favorite brewery'
        }

        
        

        return (
            <div className="favoriteBreweryHolder">
                {mostFrequent}
            </div>
        )
    }
}
