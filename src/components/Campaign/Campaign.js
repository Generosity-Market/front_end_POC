import React, { Component } from 'react';
import causeNames from '../../data.js';

export default class Campaign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      amount: 0
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id;

    for (var i = 0; i < causeNames.length; i++) {

      if (causeNames[i].id === Number(id)) {
        this.setState({
          id: causeNames[i].id,
          name: causeNames[i].name,
          amount: causeNames[i].amount
        })
      }
    }
  }

  render() {

    let envelopeContainer = [],
        envelopeNumber = 1,
        amount = this.state.amount;

    while (amount > 0) {

      envelopeContainer.push({amount: amount, envelopeNumber: envelopeNumber})
      amount = amount - envelopeNumber;
    envelopeNumber++;
    }

    let envelopeDisplay = envelopeContainer.map((cause, index) => {
      return <div key={index} className="envelope" style={{flexBasis: '12%', margin: '0.25rem', backgroundColor: '#efefff'}}>
              <h3>{cause.envelopeNumber}</h3>
             </div>;
    })

    return (
      <div className="Campaign">
        <h1 style={{textAlign: 'center'}}>Campaign Component</h1>
        <p>{this.state.name} <span style={{color: 'red'}}>id: {this.state.id}</span> details</p>

        <div className="campaignBanner" style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'gray', color: 'white', position: 'sticky', top: '0'}}>
          <p>Amount ro raise: ${this.state.amount}</p>
          <p>Envelope Amount: {envelopeNumber - 1}</p>
        </div>

        <div className="envelopeDisplay" style={{display: 'flex', flexFlow: 'row wrap', width: '90%', margin: '4rem auto', justifyContent: 'space-around', textAlign: 'center'}}>
          {envelopeDisplay}
        </div>

      </div>
    )
  }
};
