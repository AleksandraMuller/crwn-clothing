import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";

export const CartIcon = () => {
  const dispatch = useDispatch();
  // const itemsCount = useSelector(state => selectCartItemsCount(state));
  const selectors = useSelector(
    createStructuredSelector({
      itemsCount: selectCartItemsCount
    })
  );
  return (
    <div className="cart-icon" onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{selectors.itemsCount}</span>
    </div>
  );
};
