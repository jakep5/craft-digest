import React from 'react';
import LandingPage from './routes/LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom'
import SignUpPage from './routes/SignUpPage/SignUpPage'
import SignInPage from './routes/SignInPage/SignInPage'
import TriedList from './routes/TriedList/TriedList'
import exampleBeers from './store'
import AddToListPage from './routes/AddToListPage/AddToListPage';
import RecommendBeerPage from './routes/RecommendBeerPage/RecommendBeerPage';

class App extends React.Component {


  render() {

    return (
      <> 
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </head>
        <body>
          <div className="app">
            <main className='App'>
              <Switch>
                <Route 
                  exact
                  path={"/"}
                  component={LandingPage}
                />
                <Route
                  exact
                  path={"/signUp"}
                  component={SignUpPage}
                />
                <Route
                  exact
                  path={"/signIn"}
                  component={SignInPage}
                />
                <Route
                  exact
                  path={"/triedList"}
                  component={TriedList}
                />
                <Route
                  exact
                  path={"/addBeer"}
                  component={AddToListPage}
                />
                <Route
                  exact
                  path={"/randomBeer"}
                  component={RecommendBeerPage}
                />
              </Switch>
            </main>
          </div>
        </body>
      </>
    )
  }
}


export default App;