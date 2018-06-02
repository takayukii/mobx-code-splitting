import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Counter extends Component {
  handleInc = () => {
    this.props.increment();
  };

  handleDec = () => {
    this.props.decrement();
  };

  handleIncAsync = () => {
    this.props.incrementAsync();
  };

  render() {
    const { counter } = this.props;
    console.log('Counter render', counter);
    return (
      <div>
        Doubled: {this.props.counter.doubled} {'  '}
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
        <button onClick={this.handleIncAsync}> Increment async </button>
        <div>
          <Link to="/">go to A</Link>
        </div>
      </div>
    );
  }
}
