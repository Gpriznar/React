import React, {Component} from 'react'
import './Curse.css'

export class Counter extends Component {

  constructor(){
    super()

    console.log('constructor')
    console.log(this)

    this.state = {
      count: 0,
      likes: 0,
      users: ["Alex, Mary"],
      isAuthenticated: false
    }

    this.incrementCounter = this.incrementCounter.bind(this)

  }

   incrementCounter = () =>{
     console.log(this)

     this.setState({
       count: this.state.count +1
     })
   }

   negativeCounter = () => {
     console.log(this)

    this.setState({
      count: this.state.count -1
    })
   }

   render() {
     return (
       <div className="counterbox">
       <h1>{this.state.count}</h1>
       <button onClick={this.incrementCounter}>+</button>
       <button onClick={this.negativeCounter}>-</button>
       </div>
     )
   }
}
