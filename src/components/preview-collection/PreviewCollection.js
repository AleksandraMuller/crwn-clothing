import React from "react";

import { ItemCollection } from "../item-collection/ItemCollection";

import "./preview-collection.styles.scss";

export const PreviewCollection = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <ItemCollection key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};
