import React, { useState } from "react";

function Item({ name, category }) {
  const [item, setItem] = useState("");
  
  function itemClicked() {
    setItem(!inCart);
  }
  
  const inCart = item ? "in-cart" : "";
  
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={itemClicked}>{inCart? "Remove from Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
