import React from 'react'
import BeerListItem from '../BeerListItem/BeerListItem'
import { BeerConsumer } from '../../contexts/BeerContext'
import { BeerContext } from '../../contexts/BeerContext'
import './BeerTriedList.css'



export default class BeerTriedList extends React.Component {

    static contextType = BeerContext;

    render() {

        return (
            <BeerConsumer>
                {value => (
                    <div className ="beerTriedListHolder">
                        {value.beers.map((beer) =>
                            <BeerListItem 
                                beerName={beer.name}
                                beerBrewery={beer.brewery_name}
                                beerBreweryLocation={beer.brewery_location}
                                beerTastingNotes={beer.tasting_notes}
                                beerAbv={beer.abv}
                                beerId={beer.id}
                                beerRating={beer.rating}
                            />
                        )}
                    </div>
                )}
            </BeerConsumer>
        )
    }
}