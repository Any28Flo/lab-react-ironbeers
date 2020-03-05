import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ="columns is-multiline">
        <Home />

        </div>
      
      </div>
    );
  }
}

export default App;
