import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Home from './components/Home';
import Main from './components/Main';
import Profile from './components/Profile';

ReactDOM.render(
  <Router history={hashHistory}>
  {/* browserHistory vs hashHistory - which one? */}
    <Route path="/" component={Main}>
      <Route path="profile/:username" component={Profile} />
      <IndexRoute component={Home} />
      {/* <Route path="*" component={Home}/> */}
    </Route>
  </Router>,
  document.getElementById('root')
);
