import React from "react";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";

// import STRIPE_PUBLISHABLE from "./constants/stripe";
// import PAYMENT_SERVER_URL from "./constants/server";

const CURRENCY = "USD";
const fromDollarsToCent = amount => amount * 100;
const successPayment = data => {
  alert("Payment Successful");
};
const errorPayment = data => {
  alert("Payment Error");
};
const onToken = (amount, description) => token =>
  axios
    .post("http://localhost:8000", {
      description,
      source: token.id,
      currency: CURRENCY,
      amount: fromDollarsToCent(amount)
    })
    .then(successPayment)
    .catch(errorPayment);
const Checkout = ({ name, description, amount }) => (
  <StripeCheckout
    name={name}
    description={description}
    amount={fromDollarsToCent(amount)}
    token={onToken(amount, description)}
    currency={CURRENCY}
    stripeKey={"pk_test_to1myaOWLB3OIRVOghrvGiWJ003rbWObtV"}
  />
);
export default Checkout;
