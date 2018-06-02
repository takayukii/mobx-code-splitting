import React from 'react';

import { observer } from 'mobx-react';
import CounterA from '../../components/counter-a';

export default observer(({store}) => {
  const props = {
    count: store.count,
    increment: store.increment,
    decrement: store.decrement,
    incrementAsync: store.incrementAsync
  };
  return <CounterA {...props} />;
});
