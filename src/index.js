import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import  BeerProvider  from './contexts/BeerContext'
import App from './App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <BeerProvider>
            <App />
        </BeerProvider>
    </BrowserRouter>, 
    document.getElementById('root'));