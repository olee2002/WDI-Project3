// Importing React
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


//Importing components
import HomePage from './Components/HomePage'
import LoginPage from './Components/LoginPage'
import UserProfile from './Components/UserProfile'


class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/users' component={LoginPage} />
            <Route exact path='/users/:userId' component={UserProfile} /> 

          </Switch>
          <div className="copyRight">Copyright © 2018, MyArchitecture App,LLC All Rights Reserved. </div>
        </div>
      </Router>
    );
  }
}

export default App;
