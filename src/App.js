import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Heading} from './Heading'
import {Footer} from './Footer'
import Dashboard from './components/Dashboard';

class App extends Component {
  render() {
    return (
      <div className="text-center bg-secondary">
      <img src={logo} width="100" height="100" className="App-logo"></img>
        <Heading name="welcome to the react demo app"></Heading>
        <Dashboard></Dashboard>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
