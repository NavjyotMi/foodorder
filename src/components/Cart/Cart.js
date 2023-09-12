import Model from "../UI/Model";
import classes from "./Cart.module.css";

import React from "react";

function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Suchi", amount: 2, price: 12.99 }].map(
        (item, key) => (
          <li key={key}>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <Model closeHandler={props.closeHandler}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>78</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.closeHandler}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Model>
  );
}

export default Cart;
