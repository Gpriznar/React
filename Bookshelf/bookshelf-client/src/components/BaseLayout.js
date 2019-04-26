import React, {Component} from 'react';
import './BaseLayout.css';
import {Booklist} from './BookList'
import {AddBook} from './AddBook'
import {Link, NavLink} from 'react-router-dom'

export class Menu extends Component {

render() {
  return (
    <ul className="menu">
    <li><NavLink to="/" className="link">Home</NavLink></li>
    <li><NavLink to="/add-book" className="link">Add Book</NavLink></li>
    <li><NavLink to="/view-bookshelf" className="link">View Bookshelf</NavLink></li>
    </ul>
    )
  }
}

export class Footer extends Component {
  render(){
    return(
      <div className="footer">A Gregory Priznar Production - Copyright 2019</div>
    )
  }
}

export class BaseLayout extends Component {
  render() {
    return (
      <div>
      <Menu />
      {this.props.children}
      <Footer />
      </div>
    )
  }
}
