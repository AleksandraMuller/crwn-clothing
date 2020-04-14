import React from "react";
// import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles.js";
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
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {selectors.currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {selectors.hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};
