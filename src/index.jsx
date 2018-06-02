import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import state from './app/store/app-state';

const Loading = () => <div>Loading...</div>;

const A = Loadable({
  loader: () => import('./app/containers/a'),
  loading: Loading
});

const B = Loadable({
  loader: () => import('./app/containers/b'),
  loading: Loading
});

render(
  <Router>
    <Switch>
      <Route exact path="/" render={() => <A store={state} />} />
      <Route path="/b" render={() => <B store={state} />} />
    </Switch>
  </Router>,
  document.getElementById('root')
);
