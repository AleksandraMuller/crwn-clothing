import React from "react";
import { useSelector } from "react-redux";

import { CheckoutItem } from "../../components/checkout-item/CheckoutItem";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selector";

import "./checkout.styles.scss";

export const Checkout = () => {
  const selectors = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems,
      total: selectCartTotal
    })
  );
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {selectors.cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL: ${selectors.total}</span>
      </div>
    </div>
  );
};
