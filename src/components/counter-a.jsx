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
    return (
      <div>
        <h1>Counter A</h1>
        Counter: {this.props.count} {'  '}
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
        <button onClick={this.handleIncAsync}> Increment async </button>
        <div>
          <Link to="/b">go to B</Link>
        </div>
      </div>
    );
  }
}

