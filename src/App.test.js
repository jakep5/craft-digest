import React from 'react';
import ReactDOM from 'react-dom';
import BeerProvider from './contexts/BeerContext';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter>
                    <BeerProvider>
                      <App />
                    </BeerProvider>
                  </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
