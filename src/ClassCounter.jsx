import React, { Component } from "react";

export default class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

   incrementCount = () => {
    // const value = this.state.count + 1
    this.setState({count: this.state.count + 1})
  }

   decrementCount = () => {
    if(this.state.count > 0) {
    //   setCount(count - 1);
      this.setState({count: this.state.count - 1})
    }
  } 

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <div className="button-container">
          <button className="incrementButton" onClick={this.incrementCount}>
            +
          </button>
          <button className="decrementButton" onClick={this.decrementCount}>
            -
          </button>
        </div>
      </div>
    );
  }
}
