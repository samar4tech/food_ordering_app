import React from "react";
const CartContext = React.createContext({
  items: [],
  totalAmounts: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  EmptyCart: () => {},
});

export default CartContext;
