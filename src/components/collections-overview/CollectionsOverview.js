import React from "react";
import { useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

import { PreviewCollection } from "../preview-collection/PreviewCollection";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";

import "./collections-overview.styles.scss";

export const CollectionsOverview = () => {
  const selectors = useSelector(
    createStructuredSelector({
      collections: selectCollectionsForPreview
    })
  );
  return (
    <div className="collections-overview">
      {selectors.collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollection key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
