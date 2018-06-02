export default class Person {
  constructor(person) {
    this.person = person;
  }

  validateFirst() {
    const { person: { first } } = this;
    if (!first) {
      return 'empty';
    }
    return '';
  }

  validateFamily() {
    const { person: { family } } = this;
    if (!family) {
      return 'empty';
    }
    return '';
  }

  get fullName() {
    return `${this.person.first} ${this.person.family}`;
  }

  get first() {
    return this.person.first;
  }

  get family() {
    return this.person.family;
  }

  get age() {
    return this.person.age;
  }
}
