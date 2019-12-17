import React, { Component } from 'react'
import { css } from '@emotion/core'
import BeerContext, { BeerConsumer } from '../../contexts/BeerContext'
import ClipLoader from 'react-spinners/ClipLoader'



export default class LoadingSpinner extends Component {

   static contextType = BeerContext;

   

    render() {

        const override = css`
            display: block;
            margin-top: 50%;
            border-color: grey;
        `;

        return (
            <BeerConsumer>
                {value => (
                    <div className="loadingSpinnerHolder">
                        <ClipLoader
                            css={override}
                            sizeUnit={"px"}
                            size={150}
                            color={'#123abc'}
                            loading={value.isLoading}
                        />
                    </div>
                )}
            </BeerConsumer>
        )
    }
}
