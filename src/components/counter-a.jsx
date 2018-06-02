import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

class CounterA extends Component {
  handleInc = () => {
    this.props.store.increment();
  };

  handleDec = () => {
    this.props.store.decrement();
  };

  handleIncAsync = () => {
    this.props.store.incrementAsync();
  };

  render() {
    return (
      <div>
        <h1>Counter A</h1>
        Counter: {this.props.store.count} {'  '}
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

export default observer(CounterA);
