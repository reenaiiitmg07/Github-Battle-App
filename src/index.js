import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import User from './components/user';
import Popular from './components/popular'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<BrowserRouter>
  <div>
    <Route exact path='/' component={App}/>
    <Route exact path='/battle' component={User}/>
    <Route exact path='/popular' component={Popular}/>
  </div>
</BrowserRouter>



  , document.getElementById('root'));

registerServiceWorker();
