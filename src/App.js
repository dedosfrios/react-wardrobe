import React, { Component } from 'react';
import './App.css';

import Parent from './components/UserUniflow'

class App extends Component {
  render() {
    return (
      <div className="app">
        <Parent info={{name:"Child_One"}}/>
      </div>
    );
  }
}

export default App;
