import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HMVsVHuMrVKYj1P1s09qwr97Pzng9D6fFBfAXTWtf7f8LTsZ1aoLTNlpBUUjB3xkWD9miSyQSKfiVj9l9HYWimY00h2eyUyje";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesfull");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is: $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
