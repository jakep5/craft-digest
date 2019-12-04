import React, { Component } from 'react'
import { BeerContext } from '../../contexts/BeerContext'

export default class NumberOfBeersAdded extends Component {

    static contextType = BeerContext;

    render() {

        let beerCount = this.context.beers.length

        return (
            <div className="beerCountHolder" role="contentinfo">
                {beerCount}
            </div>
        )
    }
}
