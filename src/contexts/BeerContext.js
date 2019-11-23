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


    render() {

        const contextValue = {
            beers: this.state.beers,
            handleAddBeer: this.handleAddBeer
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
