import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./Header.js"
import {Curse} from './Curse.js'
import {Watchkit} from './Watchkit.js'
import {Swift} from './Swift.js'
import {Counter} from './Counter.js'
import {CustomerList} from './CustomerList.js'

class App extends Component {

constructor() {
  super()

  this.state = {
    name: '',
    customers: []
  }
}

  handleAddClick = (e) => {

    let name = this.state.name
    this.setState({
      customers: this.state.customers.concat(name)
    })
  }

  handleTextChange = (e) => {
    console.log(e.target.value)

      this.setState({
      name: e.target.value
    })
  }

render() {
  return (
            <div>
              <Header></Header>
              <Curse></Curse>
              <Watchkit></Watchkit>
              <Swift></Swift>
              <Counter></Counter>
              <input onChange type={this.handleTextChange} type="text" />
              <button onClick={this.handleAddClick}>Add</button>
              <CustomerList customers={this.state.customers} />
            </div>
    )
  }
}
export default App;
