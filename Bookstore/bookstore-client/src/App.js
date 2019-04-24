import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super()

    this.state={
      books: [],
      title: '',
      genre: '',
      author: '',
      year: '',
      imageURL: ''
    }
  }

  componentDidMount() {

    this.populateBooks()


  }

  populateBooks() {

    let url = "http://localhost:8080/api/books"

    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        books: json
      })
    })

  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }

  handleSaveBookClick = () => {

    let book = {title: this.state.title, genre: this.state.genre, author: this.state.author, year: this.state.year, imageURL: this.state.imageURL}

    fetch('http://localhost:8080/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        genre: this.state.genre,
        author: this.state.author,
        year: this.state.year,
        imageURL: this.state.imageURL
      })

    })
    .then(() => this.populateBooks())

  }

  render () {

    let books = this.state.books
    let bookItems = books.map((b) => {
      return (

        <li className="booklist">{b.title} - Written by {b.author} - Genre: {b.genre}  - Published in {b.year}
        <div className="imagediv">
        <img className="bookcoverimg"src={b.imageURL}/> <button className="deletebutton">Delete Book</button>
        </div>
        </li>

      )
    })

    return (
      <div className="mainbox">
      <h1 className="headertitle">Greg's Book Shelf</h1>
      <h4 className="addnewbooktitle"> Add a new book </h4>
      <input className="addnewbookinput" type="text" onChange={this.handleTextBoxChange} placeholder="Enter Title" name="title" />
      <input className="addnewbookinput"  type="text" onChange={this.handleTextBoxChange} placeholder="Enter Genre" name="genre" />
      <input className="addnewbookinput"  type="text" onChange={this.handleTextBoxChange} placeholder="Enter Author" name="author" />
      <input className="addnewbookinput"  type="text" onChange={this.handleTextBoxChange} placeholder="Enter Year" name="year" />
      <input className="addnewbookinput" type="text" onChange={this.handleTextBoxChange} placeholder="Enter ImageURL" name="imageURL" />
      <button className="addnewbookinput" onClick={this.handleSaveBookClick}>Add</button>
      <ul className="ulbooklist"> {bookItems}</ul>
      </div>
    )
 }
}


export default App;
