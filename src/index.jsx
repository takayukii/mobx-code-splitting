import React from 'react';
import { render } from 'react-dom';
import Counter from './components/counter';
import state from './app/app-state';

render(
  <Counter store={state} />,
  document.getElementById('root')
);
