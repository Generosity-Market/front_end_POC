import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BaseLayout extends Component {

  render() {
    return (
      <div className="Baselayout">
        <h3>BaseLayout</h3>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {this.props.children}
      </div>
    )
  }
}
