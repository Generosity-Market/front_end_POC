import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import causeNames from '../../data.js';

export default class CauseList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      causes: causeNames,
      message: "there are no causes"
    }
  }

  render() {

    let causeStyle = {
      // backgroundColor: 'lightgray',
      height: '3rem',
      margin: '3rem',
      display: 'flex'
    };

    let linkStyle = {
      border: '3px solid rgba(50,50,50,0.2)',
      borderRadius: '3px',
      color: 'darkslategray',
      padding: '0.75rem 0rem',
      textDecoration: 'none',
      flexBasis: '30%',
      textAlign: 'center',
      verticalAlign: 'center'
    };

    let displayedStuff;
    if (this.state.causes) {
      displayedStuff = this.state.causes.map((cause) => {
        return <div key={cause.id} className="causes" style={causeStyle}>
                <Link to={`/causes/${cause.id}`} style={linkStyle}>{cause.name}</Link>
              </div>;
      })
    } else {
      displayedStuff = this.state.message;
    }


    return (
      <div className="CauseList">

        <h1 style={{textAlign: 'center'}}>Cause List Component</h1>

        {displayedStuff}

      </div>
    )
  }
};
