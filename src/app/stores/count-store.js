import { observable, action, runInAction } from 'mobx';

const countStore = observable({
  count: 0
});

countStore.increment = action(() => {
  countStore.count += 1;
});
countStore.decrement = action(() => {
  countStore.count -= 1;
});
countStore.incrementAsync = action(() => {
  setTimeout(() => {
    runInAction(
      'Timeout increment',
      () => {
        countStore.count += 1;
      },
      this
    );
  }, 1000);
});

export default countStore;
