import React from 'react';

import { observer, inject } from 'mobx-react';
import PersonComponent from '../../components/person';
import Person from '../../domains/vo/person';

export default inject('stores')(observer(({ stores }) => {
  const { person } = stores;
  const { update, incrementAge } = person;

  const props = {
    person: new Person(person.toJS()),
    updateField: update,
    incrementAge
  };
  return <PersonComponent {...props} />;
}));
