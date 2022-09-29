import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import styled from "./Modal.module.css";
const Backdrop = (props) => {
  return <div onClick={props.onHideCart} className={styled.backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styled.modal}>
      <div className={styled.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onHideCart={props.onHideCart} />,
        portalElement
      )}
      ;
      {ReactDOM.createPortal(
        <ModalOverlay onHideCart={props.onHideCart}>
          {props.children}
        </ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
