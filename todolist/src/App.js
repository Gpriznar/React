import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {NewTask} from './NewTask.js'

export class App extends Component {

  constructor() {
    super()

    this.state = {
      name: '',
      tasks: [],
      completedtasks: []
    }

  }

  handleAddClick =  () => {

    let name = this.state.name
    this.setState({
      tasks: this.state.tasks.concat(name)
    })
  }

  handleTextChange = (e) => {
    console.log(e.target.value)

    this.setState({
      name: e.target.value
    })

  }

  removeTask = (name) => {
    console.log("removeTask in App.js")
    console.log(name)

    this.setState({
      tasks: this.state.tasks.filter((item) => item !=name)
    })
  }


  render() {
    return (
      <div className="bodybox">
      <h1 className="newtasktitle">ToDo List v4</h1>
      <input className="addinput" onChange={this.handleTextChange} type="text" />
      <button className ="addbutton" onClick={this.handleAddClick}>Add Task</button>
      <h1 className="newtasktitle">New Tasks:</h1>
      <NewTask tasks = {this.state.tasks} removeTaskCallback={this.removeTask}/>
      <h1 className="newtasktitle">Completed Tasks:</h1>
      </div>
    )
  }


}

export default App;
