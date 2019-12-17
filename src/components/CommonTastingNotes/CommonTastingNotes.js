import React, { Component } from 'react'
import { BeerContext } from '../../contexts/BeerContext'
import './CommonTastingNotes.css'
import BubbleChart from '@weknow/react-bubble-chart-d3';
import MediaQuery from 'react-responsive'

export default class CommonTastingNotes extends Component {

    static contextType = BeerContext;

    render() {

        let tastingNotesArray = [];

        this.context.beers.forEach(beer => {
            tastingNotesArray.push(beer.tasting_notes)
        });

        //Joins tasting notes array entries and removes commas separating the entries
        let tastingNotesArrayJoin = tastingNotesArray.join(" ");
        let tastingNotesFinal = tastingNotesArrayJoin.replace(/[, ]+/g, " ").trim();
        let tastingNotesLowerCase = tastingNotesFinal.toLowerCase();
       
        //Ensures there are spaces between the tasting notes entries
        let words = tastingNotesLowerCase.replace(/[.]/g, '').split(/\s/);
        let freqMap = {};

        //Retrieves frequency of each value in tasting notes array
        words.forEach(function(w) {
            if (!freqMap[w]) {
                freqMap[w] = 0;
            }
            freqMap[w] += 1;
        });

        let data  = [];

        //Creates required object structure for the bubble chart data value
        Object.keys(freqMap).map((word, i) => (
            data.push({
                "label": Object.keys(freqMap)[i],
                "value": Object.values(freqMap)[i]
            })
        ));

        return (

            <div id="bubbleChart" role="contentinfo">
                    <MediaQuery minDeviceWidth={1000}>

                        {/* Only renders bubble chart if there are at least 3 tasting note entries */}
                        {Object.keys(data).length >= 3 ?
                            <BubbleChart
                            graph= {{
                                zoom: .75,
                                offsetX: -0.00,
                                offsetY: -0.01,
                            }}
                            height={800}
                            padding={0} 
                            showLegend={true} 
                            legendPercentage={20} 
                            legendFont={{
                                    family: 'Arial',
                                    size: 12,
                                    color: 'white',
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
                            data={data}
                        />

                        : <p>You must have at least 3 distinct tasting notes to see data</p>
                    }
                </MediaQuery>   

                <p id="warning">Bubble chart only available on desktop version</p>

            </div>
        )
    }
}
