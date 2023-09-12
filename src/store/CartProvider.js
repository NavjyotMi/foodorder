import React, { useReducer } from "react";
import CartContext from "./Cart-context";
const defaultCartstate = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updateState = state.items.concat(action.item);
    const updateprice =
      state.totalAmount + action.items.price * action.items.amount;
    return {
      items: updateState,
      totalAmount: updateprice,
    };
  }
};
function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartstate
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id });
  };
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItema: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
