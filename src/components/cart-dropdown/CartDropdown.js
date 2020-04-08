import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { CustomButton } from "../custom-button/CustomButton";
import { CartItem } from "../cart-item/CartItem";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  // const cartItems = useSelector(state => selectCartItems(state));
  let history = useHistory();
  let dispatch = useDispatch();
  const selectors = useSelector(
    createStructuredSelector({
      cartItems: selectCartItems
    })
  );

  const handleCheckout = event => {
    event.preventDefault();
    history.push("/checkout");
    dispatch(toggleCartHidden());
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {selectors.cartItems.length ? (
          selectors.cartItems.map(cartItem => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
