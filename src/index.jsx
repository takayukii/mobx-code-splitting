import React from 'react';
import { render } from 'react-dom';
import state from './app/app-state';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const A = Loadable({
  loader: () => import('./components/counter-a'),
  loading: Loading,
});

const B = Loadable({
  loader: () => import('./components/counter-b'),
  loading: Loading,
});

render(
  <Router>
    <Switch>
      <Route exact path="/" render={() => <A store={state}/>} />
      <Route path="/b" render={() => <B store={state}/>} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
