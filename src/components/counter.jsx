import React, { Component } from 'react';
import { observer } from 'mobx-react';

class Counter extends Component {
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
        Counter: {this.props.store.count} {'  '}
        <button onClick={this.handleInc}> + </button>
        <button onClick={this.handleDec}> - </button>
        <button onClick={this.handleIncAsync}> Increment async </button>
      </div>
    );
  }
}

export default observer(Counter);
