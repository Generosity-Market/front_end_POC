import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import STRIPE_PUBLISHABLE from '../constants/stripe';
import PAYMENT_SERVER_URL from '../constants/server';

const CURRENCY = 'USD';

const successPayment = data => {
  console.log("successData: ", data);
  alert('Payment Successful');
};

const errorPayment = data => {
  console.log("errorData: ", data);
  alert('Payment Error');
};

const onToken = (amount, description) => token => {

  let requestBody = {
    description: description,
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
  .then(successPayment)
  .catch(errorPayment)
}

const Checkout = ({ name, description, amount }) =>
  <StripeCheckout
    name={name}
    description={description}
    amount={amount} // in cents
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={STRIPE_PUBLISHABLE}
    zipCode={true}
  />

export default Checkout;
