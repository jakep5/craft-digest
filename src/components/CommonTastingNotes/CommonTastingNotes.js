import React, { Component } from 'react'
import { BeerContext } from '../../contexts/BeerContext'
import { BeerConsumer } from '../../contexts/BeerContext'
import './CommonTastingNotes.css'

export default class CommonTastingNotes extends Component {

    static contextType = BeerContext;

    render() {

        let tastingNotesArray = [];

        this.context.beers.map(beer => {
            tastingNotesArray.push(beer.tasting_notes)
        })

        let tastingNotesArraySplit = tastingNotesArray.splice('')

        console.log(tastingNotesArraySplit)

        return (
            <div id="word-cloud">
            </div>
        )
    }
}