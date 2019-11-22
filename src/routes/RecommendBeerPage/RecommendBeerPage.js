import React, { Component } from 'react'
import RecommendedBeer from '../../components/RecommendedBeer/RecommendedBeer'
import './RecommendBeerPage.css'

export default class RecommendBeerPage extends Component {
    render() {
        return (
            <>
                <main role="main">
                    <header role="banner">
                        <h1 class="recommendBeerTitle">Here's a beer for you to try</h1>
                    </header>

                    <section class="recommendBeerSection">

                       <RecommendedBeer />

                    </section>
                </main>
            </>
        )
    }
}
