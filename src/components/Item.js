import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  // toggle function to add or remove item from cart
  function toggleCart() {
    setInCart((inCart) => !inCart);
  }

  // function to get button text based on inCart state
  function buttonText() {
    return inCart ? "Remove From Cart" : "Add To Cart";
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>{buttonText()}</button>
    </li>
  );
}

export default Item;
