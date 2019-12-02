import React from 'react'
import exampleBeers from '../store'
import BeerApiServiceObject from '../services/beer-api-service'

export const BeerContext = React.createContext();

export class BeerProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            userId: null
        }
    }

    handleAddBeer = (newBeer) => {
        BeerApiServiceObject.postBeer(newBeer)
        this.setState({
            beers: [...this.state.beers, newBeer]
        })
    }

    setUserId = (userId) => {
        this.setState({
            userId: userId
        })
        this.getBeers(userId)
    }

    deleteBeer = (beerId) => {
        const afterDeleteBeers = this.state.beers.filter(br =>
            br.id !== beerId)
        console.log(beerId)
        this.setState({
            beers: afterDeleteBeers
        })
        BeerApiServiceObject.deleteBeer(beerId)

    }


    handleLogIn = () => {
        this.setState({
            mustLogIn: false
        })
    }

    getBeers = (userId) => {
        BeerApiServiceObject.getBeers(userId)
            .then(beers => this.setNewBeers(beers))
    }

    setNewBeers = (beers) => {
        this.setState({
            beers
        })
    }
    
    render() {

        const contextValue = {
            beers: this.state.beers,
            handleAddBeer: this.handleAddBeer,
            deleteBeer: this.deleteBeer,
            handleLogIn: this.handleLogIn,
            getBeers: this.getBeers,
            userId: this.state.userId,
            setUserId: this.setUserId,
            setNewBeers: this.setNewBeers
        }

        return (
            <BeerContext.Provider
                value={contextValue}
            >
                {this.props.children}
            </BeerContext.Provider>
        )
    }
}

export const BeerConsumer = BeerContext.Consumer;
