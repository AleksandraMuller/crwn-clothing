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
          .map(({ id, ...otherItemProps }) => (
            <ItemCollection key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};
