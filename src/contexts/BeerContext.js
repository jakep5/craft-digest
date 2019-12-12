import React from 'react'
import BeerApiServiceObject from '../services/beer-api-service'
import {withRouter} from 'react-router-dom'


export const BeerContext = React.createContext();

class BeerProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            beers: [],
            userId: null,
            isLoading: false,
            justSignedUp: false
        }
    }

    handleAddBeer = (newBeer) => {
        this.setState({
            beers: [...this.state.beers, newBeer]
        })
        BeerApiServiceObject.postBeer(newBeer)
/*         this.props.history.push('/triedList')
 */        
    }

    handleLoading = () => {
        this.setState({
            isLoading: !this.state.isLoading
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

    setJustSignedUp = () => {
        this.setState({
            justSignedUp: true
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
            setNewBeers: this.setNewBeers,
            isLoading: this.state.isLoading,
            handleLoading: this.handleLoading,
            setJustSignedUp: this.setJustSignedUp,
            justSignedUp: this.state.justSignedUp
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

export default withRouter(BeerProvider);

export const BeerConsumer = BeerContext.Consumer;


