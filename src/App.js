import React from 'react';
import './css/App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header.js'
import Home from './Home.js'
import About from './About.js'
import { withAuth0 } from '@auth0/auth0-react';

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>

          <Header />

          <Route exact path="/">
            {this.props.auth0.isAuthenticated
              ? <Home /> : null
            }
          </Route>

          <Route exact path="/about">
            {this.props.auth0.isAuthenticated
              ? <About /> : null}
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}


  export default withAuth0(App);
