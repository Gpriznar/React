import React, {Component} from 'react'
import "./AddBook.css"


export class AddBook extends Component {

  constructor() {
  super()

  this.state={
    title: '',
    genre: '',
    author: '',
    imageURL: ''
  }
}



handleTextBoxChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })

}

handleSaveBookClick = () => {

  let book = {title: this.state.title, genre: this.state.genre, author: this.state.author, imageURL: this.state.imageURL}

  fetch('http://localhost:8080/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: this.state.title,
      genre: this.state.genre,
      author: this.state.author,
      imageURL: this.state.imageURL
    })

  })
  .then(() => window.postMessage('added'))

}

render () {


    return (
      <div className="mainbox">
      <h1 className="headertitle">Welcome to your Book Shelf</h1>
      <h4 className="addnewbooktitle"> Add a new book </h4>
      <input className="addnewbookinput" type="text" onChange={this.handleTextBoxChange} placeholder="Enter Title" name="title" />
      <input className="addnewbookinput"  type="text" onChange={this.handleTextBoxChange} placeholder="Enter Genre" name="genre" />
      <input className="addnewbookinput"  type="text" onChange={this.handleTextBoxChange} placeholder="Enter Author" name="author" />
      <input className="addnewbookinput" type="text" onChange={this.handleTextBoxChange} placeholder="Enter ImageURL" name="imageURL" />
      <button className="addnewbookinput" onClick={this.handleSaveBookClick}>Add</button>
      </div>
    )
  }
}
