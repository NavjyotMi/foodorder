import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/Cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const totalItem = cartCtx.items.reduce((accu, curr) => {
    return (accu += curr);
  }, 0);
  return (
    <button className={classes.button} onClick={props.closeHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItem}</span>
    </button>
  );
}

export default HeaderCartButton;
