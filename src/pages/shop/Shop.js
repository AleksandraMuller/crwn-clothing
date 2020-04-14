import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

import { CollectionsOverview } from "../../components/collections-overview/CollectionsOverview";
import { updateCollections } from "../../redux/shop/shop.actions";
import { WithSpinner } from "../../components/with-spinner/WithSpinner";
import { Collection } from "../collection/Collection";
// import { Category } from "../category/Category";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

export const Shop = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const unsubscribeFromSnapshot = null;

  useEffect(() => {
    const collectionRef = firestore.collection("collection");

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      dispatch(updateCollections(collectionsMap));
      setLoading(false);
    });

    // fetch(
    //   "https://firestore.googleapis.com/v1/projects/crwn-db/databases/(default)/documents/collections"
    // )
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));
  }, [dispatch]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        // component={CollectionsOverview}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path="/shop/:collectionId"
        // component={Collection}
        render={props => (
          <CollectionWithSpinner isLoading={loading} {...props} />
        )}
      />
      {/* <Route path={`${match.path}/:categoryId`} component={Category} /> */}
      {/* This only works via App.js, why??? */}
    </div>
  );
};
