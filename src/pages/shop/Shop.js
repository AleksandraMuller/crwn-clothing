import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { CollectionsOverview } from "../../components/collections-overview/CollectionsOverview";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";
import {
  selectIsCollectionFetching,
  selectIsCollectionsLoaded
} from "../../redux/shop/shop.selectors";
import { WithSpinner } from "../../components/with-spinner/WithSpinner";
import { Collection } from "../collection/Collection";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionWithSpinner = WithSpinner(Collection);

export const Shop = ({ match }) => {
  const unsubscribeFromSnapshot = null;
  const dispatch = useDispatch();

  const selectors = useSelector(
    createStructuredSelector({
      isCollectionFetching: selectIsCollectionFetching,
      isCollectionLoaded: selectIsCollectionsLoaded
    })
  );

  useEffect(() => {
    dispatch(fetchCollectionsStartAsync());
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner
            isLoading={selectors.isCollectionFetching}
            {...props}
          />
        )}
      />
      <Route
        path="/shop/:collectionId"
        render={props => (
          <CollectionWithSpinner
            isLoading={!selectors.isCollectionLoaded}
            {...props}
          />
        )}
      />
      {/* <Route path={`${match.path}/:categoryId`} component={Category} /> */}
      {/* This only works via App.js, why??? */}
    </div>
  );
};
