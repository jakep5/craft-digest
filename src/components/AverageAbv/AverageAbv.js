import React, { Component } from 'react'
import './AverageAbv.css'
import { BeerContext } from '../../contexts/BeerContext'
import { BeerConsumer } from '../../contexts/BeerContext'

export default class AverageAbv extends Component {


    static contextType = BeerContext;


    render() {

        let averageAbv = []

        this.context.beers.map(beer =>
            averageAbv.push(beer.abv)    
        )

        let sum = averageAbv.reduce((previous, current) => current += previous);
        let avg = sum / averageAbv.length;
        let avgFixed = avg.toFixed(2)
        
        return (
            <BeerConsumer>
                {value => (
                    <div className="averageAbvHolder">
                        <p className="averageAbv">{avgFixed}%</p>
                    </div>
                )}
            </BeerConsumer>
        )
    }
}
