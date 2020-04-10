import React from "react";
import { Route } from "react-router-dom";

import { CollectionsOverview } from "../../components/collections-overview/CollectionsOverview";
// import { Category } from "../category/Category";

export const Shop = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      {/* <Route path={`${match.path}/:categoryId`} component={Category} /> */}
      {/* This only works via App.js, why??? */}
    </div>
  );
};
