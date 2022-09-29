import React from "react";
import styled from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styled.header}>
        <h1>Sam In The Kitchen</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={styled["main-image"]}>
        <img src={mealsImage} alt="A table full of foods" />
      </div>
    </React.Fragment>
  );
};
export default Header;
