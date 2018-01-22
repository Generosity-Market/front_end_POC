import React, { Component } from 'react';
import causeNames from '../../data.js';
import './Campaign.css';
import CampaignNav from '../CampaignNav/CampaignNav';
import Cart from '../../containers/Cart/Cart';
import PAYMENT_SERVER_URL from '../../constants/server';

const CURRENCY = 'USD';

const successPayment = data => {
  console.log("successData: ", data);
  alert('Payment Successful');
};

const errorPayment = data => {
  console.log("errorData: ", data);
  alert('Payment Error');
};

export default class Campaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      amount: 0,
      cart: [],
      cartTotal: 0
    };
  };

  scrollTo = (element) => {
    window.scroll({
      behavior: 'smooth',
      left: 0,
      top: element.offsetTop - 100
    });
  };

  addToCart = (amount) => {

    let clickedButton = document.querySelector(`.amount${amount}`);
    let index = this.state.cart.indexOf(amount);
    let cart = this.state.cart;
    let Total;

    if (index !== -1) {
        if (this.state.cart.length === 1) {
          this.setState({
            cart: []
          });
          clickedButton.style.backgroundColor = '';
          clickedButton.style.transform = '';
          clickedButton.style.color = '';
          clickedButton.style.border = '';
          clickedButton.setAttribute('className', `envelope amount${amount}`);
        } else {
          this.state.cart.splice(index, 1);
          clickedButton.style.backgroundColor = '';
          clickedButton.style.transform = '';
          clickedButton.style.color = '';
          clickedButton.style.border = '';
          clickedButton.setAttribute('className', `envelope amount${amount}`);
        };
    } else {
        this.state.cart.push(amount);
        clickedButton.style.backgroundColor = '#3b653d';
        clickedButton.style.transform = 'scale(0.85)';
        clickedButton.style.color = 'white';

        // clickedButton.style.border = "3px solid #ff533d";
        // clickedButton.style.backgroundColor = '#ff533d';
    };

    function getSum(total, num) {
      return total + num;
    };
    Total = cart.reduce(getSum);
    this.setState({cartTotal: Total});

    // this.setState({
    //   cartTotal: 0
    // })

    // computeCartTotal(cart)
  };

  onToken = (amount, description) => token => {
    let requestBody = {
      description: description.toString(),
      source: token.id,
      currency: CURRENCY,
      amount: amount
    };

    fetch(PAYMENT_SERVER_URL, {
      method: "POST",
      body: JSON.stringify(requestBody),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(results => {
       return results.json()
    })
    .then(successData => {
      console.log("successData::: ",successData);
      this.disableButtons(this.state.cart)
    })
    .catch(errorPayment)
  }

  disableButtons = (buttons) => {
    console.log("buttons to disbale: ", buttons);
    for (var i = 0; i < buttons.length; i++) {
      console.log(buttons[i]);
      let purchasedButton = document.querySelector(`.amount${buttons[i]}`);
      purchasedButton.style.backgroundColor = 'lightgray';
      purchasedButton.style.border = 'lightgray';
      purchasedButton.style.pointerEvents = "none";
    }
    this.setState({
      cart: []
    })
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

        return <div key={index} className='donationHeader' id={`${cause.envelopeNumber}-${cause.envelopeNumber + 20}`} style={{flexBasis: '100%', textAlign: 'left', color: 'gray', margin: '0.5rem', fontWeight: 'bold', letterSpacing: '0.1rem'}}>${cause.envelopeNumber} - ${cause.envelopeNumber + 20}</div>;

      } else {

        return <div key={index} className={`envelope amount${cause.envelopeNumber}`} style={{ margin: '0.25rem'}} onClick={() => this.addToCart(cause.envelopeNumber)}>
                <h3 style={{margin: '0.6rem 0rem'}}>${cause.envelopeNumber}</h3>
               </div>;
      }; // unreachable code warning on this line??
    });

    return (
      <div className="Campaign">

        <h1 style={{textAlign: 'center'}}>{this.state.name}</h1>

        <div className="campaignBanner" style={{display: 'flex', justifyContent: 'space-around', backgroundColor: '#62727b',  color: 'white', position: 'sticky', top: '-1px', zIndex: '1', textAlign: 'center'}}>
          <p style={{letterSpacing: '0.1rem', fontSize: '20px'}}>Amount ro raise: <br/>${this.state.amount}</p>
          <p style={{letterSpacing: '0.1rem', fontSize: '20px'}}>Envelope Amount: <br/>{envelopeNumber - 1}</p>
        </div>

        <div className="cart-container" >
          <Cart cart={this.state.cart} envelopes={envelopeDisplay} cartTotal={this.state.cartTotal} removeFromCart={this.addToCart} campaign={this.state.name}
          token={this.onToken}/>
        </div>

        <div className='campaign_container' style={{display: 'flex', width: '100%', margin: '0rem auto', justifyContent: 'center'}}>

          <div className="envelopeDisplay" style={{display: 'flex', flexFlow: 'row wrap', width: '80%', margin: '2rem 0rem', justifyContent: 'space-around', textAlign: 'center'}}>
            {envelopeDisplay}
          </div>

          <div className='campaignNav' style={{flexBasis: '10%'}}>
            <CampaignNav envelopes={envelopeDisplay} scrollTo={this.scrollTo} />
          </div>

        </div>

        <div className="top_button" onClick={() => this.scrollTo(document.getElementById('main_header'))}>
          <i className="material-icons">arrow_upward</i>
        </div>

      </div>
    )
  }
};
