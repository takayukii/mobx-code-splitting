import React from 'react';

import { observer, inject } from 'mobx-react';
import CounterComponent from '../../components/counter';
import Counter from '../../domains/vo/counter';

export default inject('stores')(observer(({ stores }) => {
  const { count: countStore } = stores;
  const {
    count, increment, decrement, incrementAsync
  } = countStore;
  const props = {
    counter: new Counter(count),
    increment,
    decrement,
    incrementAsync
  };
  return <CounterComponent {...props} />;
}));
