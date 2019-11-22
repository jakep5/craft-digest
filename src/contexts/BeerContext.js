import React, { Component } from 'react'
import exampleBeers from '../store'

export const BeerContext = React.createContext();

export default class BeerContext extends Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: exampleBeers
        }
    }

    handleAddBeer = (newBeer) => {
        this.setState({
            beers: [...exampleBeers, newBeer]
        })
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
