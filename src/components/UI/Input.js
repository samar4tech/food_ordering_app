import React from "react";
import styled from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styled.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input}></input>
    </div>
  );
});

export default Input;
