import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CauseList extends Component {

  render() {

    let causeStyle = {
      height: '3rem',
      margin: '3rem'
    }

    let linkStyle = {
      border: '3px solid rgba(50,50,50,0.2)',
      borderRadius: '3px',
      padding: '1rem 1.5rem',
      textDecoration: 'none'
    }

    return (
      <div className="CauseList">

        <h1 style={{textAlign: 'center'}}>Cause List Component</h1>

        <div className="causes" style={causeStyle}>
          <Link to='/causes/1' style={linkStyle}>Cause 1</Link>
        </div>

        <div className="causes" style={causeStyle}>
          <Link to='/causes/2' style={linkStyle}>Cause 2</Link>
        </div>

        <div className="causes" style={causeStyle}>
          <Link to='/causes/3' style={linkStyle}>Cause 3</Link>
        </div>

        <div className="causes" style={causeStyle}>
          <Link to='/causes/4' style={linkStyle}>Cause 4</Link>
        </div>

      </div>
    )
  }
};
