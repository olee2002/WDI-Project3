// Importing React
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

//Importing components
import HomePage from './Components/HomePage'
import UserPage from './Components/UserPage'
import UserProfile from './Components/UserProfile'
import CityPage from './Components/CityPage'
import ArchPage from './Components/ArchPage'
import ArchProfile from './Components/ArchProfile'



class App extends Component {
  render() {
    return (
      <div className='img'>
        <Copyright className="copyRight">Copyright © 2018, MyArchitecture App, LLC All Rights Reserved. </Copyright >
        <Router>
          <div>

            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/users' component={UserPage} />
              <Route exact path='/users/:userId' component={UserProfile} />
              <Route exact path='/city' component={CityPage} />
              <Route exact path='/city/:cityId/arch' component={ArchPage} />
              <Route exact path='/city/:cityId/arch/:archId' component={ArchProfile} />
            </Switch>

          </div>
        </Router>
      </div>
    )
  }
}


export default App;

///////////////////////////////////////////////////////////////////////////////////
//STYLED-COMPONENTS
///////////////////////////////////////////////////////////////////////////////////

const Copyright = styled.div`
  margin-top: 15px;
  margin-left: 15px;
  margin-bottom: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 11px;
  position: relative;

`

