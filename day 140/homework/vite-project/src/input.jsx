import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { inp_val: '' };
  }

  add = (e) => {
    this.setState({inp_val: e.target.value});
  }

  render() {
    return (
      <>
        <input type = "text" onChange={(e) => this.add(e)} />
        <p>{this.state.inp_val}</p>
      </>
    );
  }
}

export default Input;