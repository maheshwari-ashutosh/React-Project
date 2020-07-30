import React, {Component} from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
import {
  increment,
  decrement,
  addition,
  subtraction,
  store,
  remove,
} from '../../store/actions/actions';

class Counter extends Component {
  state = {
    counter: 0,
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState((prevState) => {
          return {counter: prevState.counter + 1};
        });
        break;
      case 'dec':
        this.setState((prevState) => {
          return {counter: prevState.counter - 1};
        });
        break;
      case 'add':
        this.setState((prevState) => {
          return {counter: prevState.counter + value};
        });
        break;
      case 'sub':
        this.setState((prevState) => {
          return {counter: prevState.counter - value};
        });
        break;
      default:
    }
  };

  storeResultHandler() {}

  render() {
    return (
      <div>
        <CounterOutput value={this.props.counter} />
        <CounterControl label='Increment' clicked={this.props.onIncrement} />
        <CounterControl label='Decrement' clicked={this.props.onDecrement} />
        <CounterControl label='Add 5' clicked={this.props.onAddition} />
        <CounterControl label='Subtract 5' clicked={this.props.onSubtraction} />
        <button onClick={this.props.onStore.bind(this, this.props.counter)}>
          Store Result
        </button>
        <ul>
          {this.props.results.map((item) => {
            return (
              <li
                key={item.id}
                onClick={this.props.onDelete.bind(this, item.id)}
              >
                {' '}
                {item.value}{' '}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.ctr.counter,
    results: state.res.result,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onAddition: () => dispatch(addition(5)),
    onDecrement: () => dispatch(decrement()),
    onSubtraction: () => dispatch(subtraction(5)),
    onStore: (result) => dispatch(store(result)),
    onDelete: (id) => dispatch(remove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
