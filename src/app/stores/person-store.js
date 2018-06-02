import { observable, action } from 'mobx';

const personStore = observable({
  first: '',
  family: '',
  age: 0
});

personStore.update = action((field, value) => {
  personStore[field] = value;
});

personStore.incrementAge = action(() => {
  personStore.age += 1;
});

personStore.toJS = function () {
  return JSON.parse(JSON.stringify(this));
};

export default personStore;
