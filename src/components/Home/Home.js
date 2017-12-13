import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Home.css';

class Home extends Component {


  render() {

    return (
      <div className="Home">
        <h1>Generosity Market</h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
};

export default Home;
