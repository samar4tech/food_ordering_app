import React, { useContext, useState } from "react";
import styled from "./Cart.module.css";
import Modal from "../UI/Modal";
import { Fragment } from "react/cjs/react.production.min";
import CartContext from "../../store/CartContext";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [isCheckOut, setIsCheckOut] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const cartCtx = useContext(CartContext);

  const hasItem = cartCtx.items.length > 0;
  const totalAmount = `$${cartCtx.totalAmounts.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckOut(true);
  };

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetch(
      "https://foodlists-1374a-default-rtdb.firebaseio.com/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.EmptyCart();
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );

  const cartModalContent = (
    <div className={styled["cart-items"]}>
      {cartItems}
      <div className={styled.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckOut && (
        <Checkout onConfirm={submitOrderHandler} onCancel={props.onHideCart} />
      )}
      {!isCheckOut && (
        <div className={styled.actions}>
          <button onClick={props.onHideCart} className={styled["button--alt"]}>
            Close
          </button>
          {hasItem && (
            <button onClick={orderHandler} className={styled.button}>
              Order
            </button>
          )}
        </div>
      )}
    </div>
  );

  const isSubmittingModalContent = <p>sending the order...</p>;

  const didSubmitModalContent = (
    <React.Fragment>
      <p>Successfully sent the order</p>
      <div className={styled.actions}>
        <button onClick={props.onHideCart} className={styled.button}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Fragment>
      <Modal onHideCart={props.onHideCart}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && !didSubmit && isSubmittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
      </Modal>
    </Fragment>
  );
};

export default Cart;
