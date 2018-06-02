import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Counter extends Component {
  handleUpdateFiled = (el) => {
    this.props.updateField(el.target.name, el.target.value);
  };

  handleIncAge = () => {
    this.props.incrementAge();
  };

  render() {
    const { person } = this.props;
    console.log('Person render', person);
    const errorFirst = person.validateFirst();
    const errorFamily = person.validateFamily();
    return (
      <div>
        <input name="first" type="text" value={person.first} onChange={this.handleUpdateFiled} />
        {errorFirst ? <span>{errorFirst}</span> : null}
        <input name="family" type="text" value={person.family} onChange={this.handleUpdateFiled} />
        {errorFamily ? <span>{errorFamily}</span> : null}
        <div>
          <span>{person.fullName}</span>
        </div>
        <button onClick={this.handleIncAge}> + </button>
        <p>{person.age}</p>
        <hr />
        <div>
          <Link to="/b">go to B</Link>
        </div>
      </div>
    );
  }
}
