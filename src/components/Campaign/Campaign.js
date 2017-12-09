import React, { Component } from 'react';
import causeNames from '../../data.js';
import './Campaign.css';

export default class Campaign extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: '',
      amount: 0
    };
  };

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
  };

  render() {

    let envelopeContainer = [],
        envelopeNumber = 1,
        amount = this.state.amount;

    while (amount > 0) {

      if (envelopeNumber % 21 === 0) {
        envelopeContainer.push({amount: amount, envelopeNumber: envelopeNumber})
        envelopeContainer.push({name: "lineBreak"});
        amount = amount - envelopeNumber;
        envelopeNumber++;
      } else {
        envelopeContainer.push({amount: amount, envelopeNumber: envelopeNumber})
        amount = amount - envelopeNumber;
        envelopeNumber++;
      };
    };

    let envelopeDisplay = envelopeContainer.map((cause, index) => {

      if (cause.name === "lineBreak") {
        return <div key={index} className="lineBreak" style={{flexBasis: '100%'}}><hr/><br/></div>
      } else {
        return <div key={index} className="envelope" style={{ margin: '0.25rem'}}>
                <h3 style={{margin: '0.6rem 0rem'}}>${cause.envelopeNumber}</h3>
               </div>;
      };
    });

    return (
      <div className="Campaign">

        <h1 style={{textAlign: 'center'}}>{this.state.name}</h1>
        <p>{this.state.name} <span style={{color: 'red'}}>id: {this.state.id}</span> details</p>

        <div className="campaignBanner" style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '#3b653d', color: 'white', position: 'sticky', top: '0', zIndex: '1'}}>
          <p>Amount ro raise: ${this.state.amount}</p>
          <p>Envelope Amount: {envelopeNumber - 1}</p>
        </div>

        <div className="envelopeDisplay" style={{display: 'flex', flexFlow: 'row wrap', width: '90%', margin: '3rem auto', justifyContent: 'space-around', textAlign: 'center'}}>
          {envelopeDisplay}
        </div>

      </div>
    )
  }
};
