import React, { Component } from "react";

class StartTimer extends Component{
  constructor(props){
    super(props);
    this.state = {timer: 0};
    this.timerId = null;
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.setState(prev => ({timer: prev.timer + 1})), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div>Timer {this.state.timer}</div>;
  }
}

export default StartTimer;