import React, {Component} from 'react';
import './App.css';

export class NewTask extends Component {

    handleRemoveClick = (name) => {
      this.props.removeTaskCallback(name)
    }

  render() {

    let tasks = this.props.tasks
    let taskItems = tasks.map((task,index) => {
      return (
        <div className="newtasklibox">
        <li className ="liitems" key={index}>{task}
        <button className ="macbutton" onClick={() => this.handleRemoveClick(task)}>Mark as Completed</button></li>
        </div>
      )
    })

    return (
      <ul className="ulbox">{taskItems}</ul>
    )

  }
}
