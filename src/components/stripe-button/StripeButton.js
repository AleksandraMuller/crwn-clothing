import React from "react";
import StripeCheckout from "react-stripe-checkout";

export const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_ppktQ1qgfx16bgotZKrgXPSO0093NdrkPu";

  const onToken = token => {
    console.log(token);
    alert("Payment successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
