import React, { Component } from 'react'
import { Link } from 'react-router-dom'
/* import RecommendedBeer from '../../components/RecommendedBeer/RecommendedBeer'
 */import './RecommendBeerPage.css'

export default class RecommendBeerPage extends Component {
    render() {
        return (
            <>
                <main role="main">
                    <header role="banner">
                        <h1 class="recommendBeerTitle">Here's a beer for you to try</h1>
                    </header>

                    <section class="recommendBeerSection">

{/*                        <RecommendedBeer />
 */}                       <div className="comingSoon">
                                <h1>Coming soon</h1>
                                <Link to="/triedList" style={{ textDecoration: 'none' }}>
                                    <p>Return to list</p>
                                </Link>
                            </div>

                    </section>
                </main>
            </>
        )
    }
}
