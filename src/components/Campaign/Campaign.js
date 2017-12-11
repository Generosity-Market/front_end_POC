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

  scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop
    });
  };

  componentDidMount() {
    let id = this.props.match.params.id;

    for (var i = 0; i < causeNames.length; i++) {
      if (causeNames[i].id === Number(id)) {
        this.setState({
          id: causeNames[i].id,
          name: causeNames[i].name,
          amount: causeNames[i].amount
        });
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

      } else if ((envelopeNumber === 1) || (envelopeNumber % 21 === 1)) {

        envelopeContainer.push({name: 'h3', envelopeNumber: envelopeNumber});
        envelopeContainer.push({envelopeNumber: envelopeNumber, amount: amount});
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

        return <div key={index} className="lineBreak" style={{flexBasis: '100%', margin: '1rem 0rem 0rem'}}>
                <hr/>
                <br/>
               </div>;

      } else if (cause.name === 'h3') {

        return <div key={index} className='donationHeader' style={{flexBasis: '100%', textAlign: 'left', color: 'gray', margin: '0.5rem', fontWeight: 'bold', letterSpacing: '0.1rem'}}>${cause.envelopeNumber} - ${cause.envelopeNumber + 20}</div>;

      } else {

        return <div key={index} className="envelope" style={{ margin: '0.25rem'}}>
                <h3 style={{margin: '0.6rem 0rem'}}>${cause.envelopeNumber}</h3>
               </div>;
      }; // unreachable code warning on this line?
    });

    return (
      <div className="Campaign">

        <h1 style={{textAlign: 'center'}}>{this.state.name}</h1>
        <p>{this.state.name} <span style={{color: 'red'}}>id: {this.state.id}</span> details</p>

        <div className="campaignBanner" style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '#3b653d', color: 'white', position: 'sticky', top: '0', zIndex: '1'}}>
          <p>Amount ro raise: ${this.state.amount}</p>
          <p>Envelope Amount: {envelopeNumber - 1}</p>
        </div>

        <div className="envelopeDisplay" style={{display: 'flex', flexFlow: 'row wrap', width: '90%', margin: '2rem auto', justifyContent: 'space-around', textAlign: 'center'}}>
          {envelopeDisplay}
        </div>

        <div className="top_button" onClick={() => this.scrollTo(document.getElementById('main_header'))}>
          <i className="material-icons">arrow_upward</i>
        </div>

      </div>
    )
  }
};
