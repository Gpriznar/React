import React, {Component} from 'react'
import './BookList.css'

export class BookList extends Component {

  constructor() {
  super()

  this.state={
    books: []
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

  render() {


      let books = this.state.books
      let bookItems = books.map((b) => {
        return (

          <li className="booklist">{b.title} - Written by {b.author} - Genre: {b.genre}
          <div className="imagediv">
          <img className="bookcoverimg"src={b.imageURL}/> <button className="deletebutton">Delete Book</button>
          </div>
          </li>
        )
      })

      return (

          <ul className="ulbooklist"> {bookItems} </ul>

    )
  }
}
