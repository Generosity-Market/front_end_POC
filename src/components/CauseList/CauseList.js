import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import causeNames from '../../data.js';
import './CauseList.css';

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
      height: '3rem',
      margin: '3rem',
      display: 'flex'
    };

    let displayedStuff;
    if (this.state.causes) {
      displayedStuff = this.state.causes.map((cause) => {
        return <div key={cause.id} className="causes" style={causeStyle}>
                <Link to={`/causes/${cause.id}`}>{cause.name}</Link>
              </div>;
      })
    } else {
      displayedStuff = this.state.message;
    }


    return (
      <div className="CauseList">

        <h1 style={{textAlign: 'center'}}>List of Causes</h1>

        <div className='add_cause_link' style={{display: 'flex', justifyContent: 'center'}}>
          <Link to='/AddCampaign' style={{ border: '1px solid lightgray', padding: '0.75rem 0rem', textDecoration: 'none', borderRadius: '3px', color: 'darkslategray', flexBasis: '15%', textAlign: 'center', verticalAlign: 'center'}}>Add Your Cause</Link>
        </div>

        {displayedStuff}

      </div>
    )
  }
};
