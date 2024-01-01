import React from "react";
import Item from "./Item";
import './item-card.css'

const ItemCard = ({ items }) => {
  return (
    <div className="item-card">
      {items?.map((item, index) => (
        <Item itemInfo={item} key={index} />
      ))}
    </div>
  );
};

export default ItemCard;
