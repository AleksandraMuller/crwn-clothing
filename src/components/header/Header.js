import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";

import { CartIcon } from "../cart-icon/CartIcon";
import { CartDropdown } from "../cart-dropdown/CartDropdown";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selector";
import { selectCurrentUser } from "../../redux/user/user.selector";

export const Header = () => {
  const selectors = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser,
      hidden: selectCartHidden
    })
  );
  // const currentUser = useSelector(state => selectCurrentUser(state));
  // const hidden = useSelector(state => selectCartHidden(state));
  // console.log(currentUser);
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
        {selectors.currentUser ? (
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
      {selectors.hidden ? null : <CartDropdown />}
    </div>
  );
};
