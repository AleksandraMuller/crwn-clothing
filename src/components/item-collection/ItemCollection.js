import React from "react";
import { useDispatch } from "react-redux";

import { CustomButton } from "../custom-button/CustomButton";
import { addItem } from "../../redux/cart/cart.actions";

import "./item-collection.styles.scss";

export const ItemCollection = ({ item }) => {
  const { name, price, imageUrl } = item;
  const dispatch = useDispatch();
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={() => dispatch(addItem(item))}>
        Add to cart
      </CustomButton>
    </div>
  );
};
