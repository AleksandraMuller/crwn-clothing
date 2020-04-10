import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import { selectCollection } from "../../redux/shop/shop.selectors";
import { ItemCollection } from "../../components/item-collection/ItemCollection";
import "./collection.styles.scss";

export const Collection = () => {
  let { collectionId } = useParams();

  const selectors = useSelector(
    createStructuredSelector({
      collection: selectCollection(collectionId)
    })
  );
  const { title, items } = selectors.collection;
  console.log(selectors.collection);

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <ItemCollection key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
