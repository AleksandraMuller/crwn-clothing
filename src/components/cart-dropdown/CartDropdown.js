import React from "react";
import { useSelector } from "react-redux";

import { CustomButton } from "../custom-button/CustomButton";
import { CartItem } from "../cart-item/CartItem";
import "./cart-dropdown.styles.scss";

export const CartDropdown = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};
