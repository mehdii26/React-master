import React, { Component } from "react";
import { connect } from "react-redux"; // A function which returns a HOC function for the export

import CounterControl from "../../Components/CounterControl/CounterControl";
import CounterOutput from "../../Components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";
import CounterControl2 from "../../Components/CounterControl/CounterControl2";

class Counter extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    this.setState(() => {
      return { inc: "dec" };
    });
  }

  counterChangedHandler = (action, value) => {
    switch (action) {
      case "inc":
        this.setState(prevState => {
          return { counter: prevState };
        });
        break;
      case "dec":
        this.setState(prevState => {
          return { counter: prevState };
        });
        break;
      case "add":
        this.setState(prevState => {
          return { counter: prevState };
        });
        break;
      case "sub":
        this.setState(prevState => {
          return { counter: prevState };
        });
        break;
      default:
        return null;
    }
  };
  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl 
        label="Add 5" 
        clicked={this.props.onAddCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractCounter}
        />
        <CounterControl2
          label="Mehdi"
          clicked={this.props.onMultiplyCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          {" "}
          Store Result{" "}
        </button>
        <ul>
          {this.props.storedResults.map(strResult => (
            <li
              key={strResult.id}
              onClick={() => this.props.onDeleteResult(strResult.id)}
            >
              {strResult.value}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr1.counter,
    storedResults: state.res1.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddCounter: () => dispatch({ type: actionTypes.ADD, value: 5 }),
    onSubtractCounter: () =>
      dispatch({ type: actionTypes.SUBTRACT, value: 5 }),
    onStoreResult: result =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: id =>
      dispatch({ type: actionTypes.DELETE_RESULT, resultElId: id }),
    onMultiplyCounter: () => 
    dispatch({type: actionTypes.MULTIPLY})
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
