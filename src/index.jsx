import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import Loadable from 'react-loadable';
import remotedev from 'mobx-remotedev';

import countStore from './app/stores/count-store';
import personStore from './app/stores/person-store';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

const allStores = {
  count: remotedev(countStore),
  person: remotedev(personStore)
};

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
  <Provider stores={allStores}>
    <Router>
      <Switch>
        <Route exact path="/" component={A} />
        <Route path="/b" component={B} />
      </Switch>
    </Router>
  </Provider>
  ,
  document.getElementById('root')
);
