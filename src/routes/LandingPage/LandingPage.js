import React from 'react'
import Nav from '../../components/Nav/Nav'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import jQuery from "jquery"

export default class LandingPage extends React.Component {

    componentDidMount() {
        document.title = "Craft Digest Home Page"

        //bubble text effect
        jQuery(document).ready(function($){

            var bArray = [];
            var sArray = [4,6,8,10];

            for (var i = 0; i < $('.bubbles').width(); i++) {
                bArray.push(i);
            }

            
            function randomValue(arr) {
                return arr[Math.floor(Math.random() * arr.length)];
            }

            setInterval(function(){

                var size = randomValue(sArray);
                $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');

                $('.individual-bubble').animate({
                    'bottom': '100%',
                    'opacity' : '-=0.7'
                }, 3000, function(){
                    $(this).remove()
                }
                );

            }, 350);
        });
    } 

    render() {
        return (
            <>
                <nav role="navigation">
                    <Nav />
                </nav>
                <header role="contentinfo" className="homePage">
                    <div className="titleHolder fade-in">

                        <div className="center-outer">
                        <div className="center-innner">

                        <div className="bubbles">
                            <h1 className="title">Craft Digest</h1>
                        </div>

                        <h2 className="title">Store, analyze, and reminisce over past beers while viewing your personalized beer trends</h2>

                        </div>
                        </div>

                    </div>
                </header>

                <section role="contentinfo">
                    <h2>Store your favorite beers</h2>
                    <h3>"Tried" list holds your past-tried beers, along with any infortmation you would like to store with the beer.</h3>
                </section>

                <section role="contentinfo">
                    <h2>Analyze and view your beer-drinking habits</h2>
                    <h3>View data regarding the type of beer, style of beer, tasing notes, and ABV of your past beers.</h3>
                    <h4 className="subText">Have Craft Digest suggest a beer for you using your recent beer choices!</h4>
                </section>

                <section role="contentinfo">
                    <h2>Search for beers you would like to try!</h2>
                    <h3>Use our search function to scope out beers you would like to try, and preemptively add them to your list!</h3>
                </section>
                <section class="signUp" role="menu">
                    <Link to="/signUp" style={{ textDecoration: 'none' }}>
                        <p id="signUpLinkLanding">Sign up</p>
                    </Link>
                    
                    <Link to="signIn" style={{ textDecoration: 'none' }}>
                        <p id="signInLinkLanding">Sign in</p>
                    </Link>
                </section>
            </>
        )
    }
}