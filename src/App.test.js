import React from 'react';
import ReactDOM from 'react-dom';
import TestObject from './store';
import BeerProvider, { BeerContext } from './contexts/BeerContext';
import SignInForm from './components/SignInForm/SignInForm';
import SignUpForm from './components/SignUpForm/SignUpForm';
import CommonTastingNotes from './components/CommonTastingNotes/CommonTastingNotes'
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/Nav/Nav'
import App from './App';
import AddBeerForm from './components/AddBeerForm/AddBeerForm';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import FavoriteBrewery from './components/FavoriteBrewery/FavoriteBrewery';
import AverageAbv from './components/AverageAbv/AverageAbv';
import NumberOfBeersAdded from './components/NumberOfBeersAdded/NumberOfBeersAdded';


describe('Basic smoke tests', () => {
  it('app renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BrowserRouter>
                      <BeerProvider>
                        <App />
                      </BeerProvider>
                    </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('Nav bar renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Sign in form renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SignInForm />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Sign up form renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <SignUpForm />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Add beer form renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <AddBeerForm />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Common tasting notes chart renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <BeerContext.Provider value={TestObject}>
          <CommonTastingNotes />
        </BeerContext.Provider>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Favorite brewery component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <BeerContext.Provider value={TestObject}>
          <FavoriteBrewery />
        </BeerContext.Provider>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Average ABV component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <BeerContext.Provider value={TestObject}>
          <AverageAbv />
        </BeerContext.Provider>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Number of beers component renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BrowserRouter>
        <BeerContext.Provider value={TestObject}>
          <NumberOfBeersAdded />
        </BeerContext.Provider>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })

  it('Loading spinner renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <BeerContext.Provider value={TestObject}>
        <LoadingSpinner />
      </BeerContext.Provider>, div)
    ReactDOM.unmountComponentAtNode(div);
  })
})
