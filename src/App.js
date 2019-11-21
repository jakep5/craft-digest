import React from 'react';
import LandingPage from './routes/LandingPage/LandingPage'
import { Route, Switch } from 'react-router-dom'
import SignUpPage from './routes/SignUpPage/SignUpPage'
import SignInPage from './routes/SignInPage/SignInPage'

class App extends React.Component {
  render() {
    return (
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
              component={triedList}
            />
          </Switch>
        </main>
      </div>
    )
  }
}


export default App;