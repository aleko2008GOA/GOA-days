import React, { Component } from 'react';

class GetApi extends Component {
  constructor(props) {
    super(props);
    this.state = { api: "Wait a minute..." }
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data =>{
            this.setState({ api: JSON.stringify(data) });
        });
  }

  render() {
    return (
      <>
        <p>{this.state.api}</p>
      </>
    );
  }
}

export default GetApi;