import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BaseLayout} from './components/BaseLayout'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {BookList} from './components/BookList'
import {AddBook} from './components/AddBook'

ReactDOM.render(

  <BrowserRouter>
  <BaseLayout>
      <Switch>

      <Route path="/" exact commponent={App} />
      <Route path="/view-bookshelf" component={BookList} />
      <Route path='/add-book' component={AddBook} />


      </Switch>
  </BaseLayout>
  </BrowserRouter>

  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();