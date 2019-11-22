import React from 'react'
import ReactDOM from 'react-dom'
import exampleBeers from '../../store'
import BeerListItem from './BeerListItem/BeerListItem'
import './BeerTriedList.css'



export default class BeerTriedList extends React.Component {
    render() {

        let triedBeers = exampleBeers

        return (
            <div className ="beerTriedListHolder">
                {triedBeers.map((beer) =>
                    <BeerListItem 
                        beerName={beer.name}
                        beerBrewery={beer.brewery}
                        beerBreweryLocation={beer.brewery_location}
                        beerTastingNotes={beer.tasting_notes}
                        beerAbv={beer.abv}
                    />
                )}
            </div>
        )
    }
}