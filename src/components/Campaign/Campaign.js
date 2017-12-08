import React, { Component } from 'react';

export default class Campaign extends Component {

  render() {
    console.log(this.props.match.params.id);
    let id = this.props.match.params.id;
    return (
      <div className="Campaign">
        <h1 style={{textAlign: 'center'}}>Campaign Component</h1>
        <p>Campaign <span style={{color: 'red'}}>{id}</span> details</p>
      </div>
    )
  }
};
