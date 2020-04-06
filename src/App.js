import React, { useEffect } from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Homepage } from "./pages/homepage/Homepage";
import { Shop } from "./pages/shop/Shop";
import { Header } from "./components/header/Header";
import { RegisterAndLogin } from "./pages/RegisterAndLogin";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

function App() {
  // const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();
  const currentUser = useSelector(state => state.user.currentUser);

  // console.log(currentUser);

  useEffect(() => {
    const unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({ id: snapshot.id, ...snapshot.data() }));
          // setCurrentUser({ id: snapshot.id, ...snapshot.data() });
        });
      }

      setCurrentUser(userAuth);
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
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <RegisterAndLogin />
          }
        />
      </Switch>
    </div>
  );
}

export default App;
