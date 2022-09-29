import React, { useContext } from "react";
import styled from "./MealItem.module.css";
import MealItemForm from "../MealItemForm";
import CartContext from "../../../store/CartContext";
const MealItem = (props) => {
  const price = `₹ ${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={styled.meal}>
      <div>
        <h3>{props.name}</h3>
        <div>{props.description}</div>
        <div>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
