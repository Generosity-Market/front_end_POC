import React, { Component } from 'react';
import './AddCampaign.css';

export default class AddCampaign extends Component {
constructor(props) {
  super(props)

  this.state = {

  }
}

  render() {

    let inputStyle = {
      borderRadius: '3px',
      padding: '1rem',
      margin: '1rem',
      width: '40%',
    };

    return (
      <div className="AddCampaign">
        <h1 style={{textAlign: 'center'}}>Add Campaign Component</h1>

        <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <input style={inputStyle} type='text' name='cause' placeholder='Name your cause'/>
          <input style={inputStyle} type='number' name='amount' placeholder='Amount to raise'/>
          <button style={{width: '10%', borderRadius: '3px', margin: '1rem', padding: '0.5rem 1rem'}} type='submit'>Submit</button>
        </form>
      </div>
    )
  }
};
