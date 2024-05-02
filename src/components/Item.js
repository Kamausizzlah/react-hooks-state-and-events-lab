import React, { useState } from "react";

function Item({ name, category }) {
const [addToCart, setAddToCart] = useState(false)
function handleClick() {
  setAddToCart(true);
}
  return (
    <li className={addToCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{addToCart ? "Remove from cart" : "Add to cart"}</button>
    </li>
  );
}

export default Item;
