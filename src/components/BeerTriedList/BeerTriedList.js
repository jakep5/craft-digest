import React from 'react'
import BeerListItem from '../BeerListItem/BeerListItem'
import { BeerConsumer } from '../../contexts/BeerContext'
import { BeerContext } from '../../contexts/BeerContext'
import './BeerTriedList.css'
import AuthApiServiceObject from '../../services/auth-api-service'
import config from '../../config'
import BeerApiServiceObject from '../../services/beer-api-service'



export default class BeerTriedList extends React.Component {

    static contextType = BeerContext;
    
    componentDidMount = () => {
        const token = sessionStorage.getItem('craft-digest-token-key')
        let payload = this.parseJwt(token)
        let userId = payload.user_id
        this.context.setUserId(userId)
        return fetch(`${config.API_BASE_URL}/beers/${userId}`, {
            headers: {
                'Authorization': `bearer ${token}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => this.context.setNewBeers(res))
    }


    parseJwt = (token) => {
        let base64Url = token.split('.')[1];
        let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        let jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload)
    }

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
