import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CauseList extends Component {

  render() {
    return (
      <div className="CauseList">

        <h1 style={{textAlign: 'center'}}>Cause List Component</h1>

        <div>
          <Link to='/causes/1'>Cause 1</Link>
        </div>
        
        <div>
          <Link to='/causes/2'>Cause 2</Link>
        </div>
        
        <div>
          <Link to='/causes/3'>Cause 3</Link>
        </div>
        
        <div>
          <Link to='/causes/4'>Cause 4</Link>
        </div>

      </div>
    )
  }
};
