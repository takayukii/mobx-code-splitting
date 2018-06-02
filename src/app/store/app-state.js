import { observable, action, runInAction } from 'mobx';
import remotedev from 'mobx-remotedev/lib/dev';

const appState = observable({
  count: 0
});

appState.increment = action(() => {
  appState.count += 1;
});
appState.decrement = action(() => {
  appState.count -= 1;
});
appState.incrementAsync = action(() => {
  setTimeout(() => {
    runInAction(
      'Timeout increment',
      () => {
        appState.count += 1;
      },
      this
    );
  }, 1000);
});

export default remotedev(appState);
