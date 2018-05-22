import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Animated, { FadeAnimations } from './animated';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Animated
            animation={{
              in: FadeAnimations.FadeInBackwards,
              duration_in: 1
            }}
            transition={{
              type: 'hover',
              from: { property: 'transform', value: 'scale(1) rotate(0)' },
              to: { property: 'transform', value: 'scale(1.2) rotate(25deg)' }
            }}
          >
            <img src={logo} className="App-logo" alt="logo" />
          </Animated>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
