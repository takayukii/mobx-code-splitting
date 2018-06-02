import React from 'react';

import { observer } from 'mobx-react';
import CounterA from '../../components/counter-a';
import Counter from '../../domains/vo/counter';

export default observer(({ store }) => {
  const props = {
    counter: new Counter(store.count),
    increment: store.increment,
    decrement: store.decrement,
    incrementAsync: store.incrementAsync
  };
  return <CounterA {...props} />;
});
