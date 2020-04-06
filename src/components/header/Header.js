import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { CartIcon } from "../cart-icon/CartIcon";
import { CartDropdown } from "../cart-dropdown/CartDropdown";

export const Header = () => {
  const currentUser = useSelector(state => state.user.currentUser);
  const hidden = useSelector(state => state.cart.hidden);
  console.log(currentUser);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};
