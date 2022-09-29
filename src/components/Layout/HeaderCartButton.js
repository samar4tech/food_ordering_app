import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styled from "./HeaderCartButton.module.css";
import CartContext from "../../store/CartContext";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((acc, curr) => {
    return (acc += curr.amount);
  }, 0);
  const btnAnimatedClassDynamically = `${styled.button} ${
    btnIsHighlighted ? styled.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);
  return (
    <button className={btnAnimatedClassDynamically} onClick={props.onShowCart}>
      <span className={styled.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styled.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
