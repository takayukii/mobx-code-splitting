import React from 'react';

import { observer } from 'mobx-react';
import CounterB from '../../components/counter-b';

export default observer(({store}) => {
  const props = {
    count: store.count,
    increment: store.increment,
    decrement: store.decrement,
    incrementAsync: store.incrementAsync
  };
  return <CounterB {...props} />;
});
