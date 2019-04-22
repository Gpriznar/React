import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header.js"
import {Curse} from './Curse.js'
import {Watchkit} from './Watchkit.js'
import {Swift} from './Swift.js'

class App extends Component {



render() {
  return (
            <div>
              <Header></Header>
              <Curse></Curse>
              <Watchkit></Watchkit>
              <Swift></Swift>
            </div>
    )
  }
}
export default App;
