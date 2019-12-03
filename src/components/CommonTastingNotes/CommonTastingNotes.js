import React, { Component } from 'react'
import { BeerContext } from '../../contexts/BeerContext'
import './CommonTastingNotes.css'
import BubbleChart from '@weknow/react-bubble-chart-d3';

export default class CommonTastingNotes extends Component {

    static contextType = BeerContext;

    render() {

        let tastingNotesArray = [];

        this.context.beers.map(beer => {
            tastingNotesArray.push(beer.tasting_notes)
        })

        let tastingNotesArrayJoin = tastingNotesArray.join(" ")
        let tastingNotesFinal = tastingNotesArrayJoin.replace(/[, ]+/g, " ").trim();
        let tastingNotesLowerCase = tastingNotesFinal.toLowerCase();

                

        let words = tastingNotesLowerCase.replace(/[.]/g, '').split(/\s/);
        let freqMap = {};
        words.forEach(function(w) {
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });

        console.log(freqMap)


        let data  = [];

        Object.keys(freqMap).map((word, i) => (
            data.push({
                "label": Object.keys(freqMap)[i],
                "value": Object.values(freqMap)[i]
            })
        ))

        console.log(data)


        return (

            <div id="word-cloud">
                {Object.keys(data).length >= 3 ?
                    <BubbleChart
                    graph= {{
                        zoom: .75,
                        offsetX: -0.00,
                        offsetY: -0.01,
                    }}
                    width={1000}
                    height={800}
                    padding={0} // optional value, number that set the padding between bubbles
                    showLegend={true} // optional value, pass false to disable the legend.
                    legendPercentage={20} // number that represent the % of with that legend going to use.
                    legendFont={{
                            family: 'Arial',
                            size: 12,
                            color: '#000',
                            weight: 'bold',
                        }}
                    valueFont={{
                            family: 'Arial',
                            size: 12,
                            color: '#fff',
                            weight: 'bold',
                        }}
                    labelFont={{
                            family: 'Arial',
                            size: 16,
                            color: '#fff',
                            weight: 'bold',
                        }}
                    //Custom bubble/legend click functions such as searching using the label, redirecting to other page
                    data={data}
                />

                : <p>You must have at least 3 distinct tasting notes to see data</p>
                }
            </div>
        )
    }
}
