import config from '../config'
import TokenServiceObject from './token-service'

const BeerApiServiceObject = {
    getBeers(userId) {
        return fetch(`${config.API_BASE_URL}/beers/${userId}`, {
            headers: {
                'Authorization': `bearer ${TokenServiceObject.getAuthToken()}`
            }
        })
            .then(res => 
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postBeer(beer) {
        return fetch(`${config.API_BASE_URL}/beers`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                "Authorization": `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify({
                id: beer.id,
                name: beer.name,
                brewery_name: beer.brewery_name,
                brewery_location: beer.brewery_location,
                tasting_notes: beer.tasting_notes,
                abv: beer.abv,
                rating: beer.rating,
                user_id: beer.user_id
            })
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()    
                )
    }
}

export default BeerApiServiceObject