import React, { Component } from 'react'
import { BeerConsumer } from '../../contexts/BeerContext'
import StarRating from 'react-star-ratings'
import './BeerListItem.css'

export default class BeerListItem extends Component {

    render() {
        return (
            <BeerConsumer>
                {value => (
                    <div className="beerListItemHolder gridBox" role="listitem">
                        <h3 className="beerName">{this.props.beerName}</h3>
                        <p className="beerBrewery">Brewery: {this.props.beerBrewery}</p>
                        <p className="beerBreweryLocation">Brewery location: {this.props.beerBreweryLocation}</p>
                        <p className="beerTastingNotes">Tasting notes: {this.props.beerTastingNotes}</p>
                        <p className="beerAbv">ABV: {this.props.beerAbv}%</p>
                        <StarRating 
                            rating={parseFloat(this.props.beerRating)}
                            starDimension="25px"
                            starSpacing="5px"
                            name="rating"
                            starRatedColor="rgb(255, 255, 0)"
                        /> <p className="beerRating">{`(${this.props.beerRating})`}</p>
                        <button className="removeBeer" onClick={() => {
                            value.deleteBeer(this.props.beerId)
                        }}>
                            Remove beer
                        </button>
                    </div>
                )}
            </BeerConsumer>
        )
    }
}
