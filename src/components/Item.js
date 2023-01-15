import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setCart] = useState(false)

  function handleClick() {
    setCart((inCart) => !inCart)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleClick}>{inCart? "Add to Cart" : "Remove from Cart"}</button>
    </li>
  );
}

export default Item;
