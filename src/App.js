import React, { useEffect, useState } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Homepage } from "./pages/homepage/Homepage";
import { Shop } from "./pages/shop/Shop";
import { Header } from "./components/header/Header";
import { RegisterAndLogin } from "./pages/RegisterAndLogin";
import { Checkout } from "./pages/checkout/Checkout";

import {
  auth,
  createUserProfileDocument
  // addCollectionAndDocuments
} from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";

function App() {
  const dispatch = useDispatch();
  // const currentUser = useSelector(state => state.user.currentUser);

  const selectors = useSelector(
    createStructuredSelector({
      currentUser: selectCurrentUser
      // loading: selectLoadingState
      // collectionsArray: selectCollectionsForPreview
    })
  );

  // console.log(currentUser);

  useEffect(() => {
    // const { collectionsArray } = selectors;
    const unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
          // setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }

      setCurrentUser(userAuth);
      // addCollectionAndDocuments(
      //   "collection",
      //   collectionsArray.map(({ title, items }) => ({ title, items }))
      // );
      // setCurrentUser(user);
      // console.log(user);
      // createUserProfileDocument(user);
    });
    return () => {
      unsuscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={Checkout} />
        <Route
          exact
          path="/signin"
          render={() =>
            selectors.currentUser ? <Redirect to="/" /> : <RegisterAndLogin />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
