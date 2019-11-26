import React from 'react'
import exampleBeers from '../store'

export const BeerContext = React.createContext();

export class BeerProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: exampleBeers
        }
    }

    handleAddBeer = (newBeer) => {
        this.setState({
            beers: [...this.state.beers, newBeer]
        })
        console.log(this.state.beers)
    }

    deleteBeer = (beerId) => {
        const afterDeleteBeers = this.state.beers.filter(br =>
            br.id !==beerId)
        this.setState({
            beers: afterDeleteBeers
        })
    }

    handleLogIn = () => {
        this.setState({
            mustLogIn: false
        })
    }


    render() {

        const contextValue = {
            beers: this.state.beers,
            handleAddBeer: this.handleAddBeer,
            deleteBeer: this.deleteBeer,
            handleLogIn: this.handleLogIn
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
