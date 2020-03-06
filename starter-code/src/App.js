import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.css';
import 'bulma/css/bulma.css'
import Home from './components/Home'
import Beers from './components/Beers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import Nav from './components/Nav'
import DetailBeer from './components/DetailBeer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="columns is-multiline">
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beers" component ={Beers}/>
          <Route exact path="/random-beer" component ={RandomBeer}/>
          <Route exact path="/new-beer" component={NewBeer}/>
          <Route exact path="/beers/:id" component={DetailBeer}/>
          </Switch>

        </div>
      
      </div>
    );
  }
}

export default App;
