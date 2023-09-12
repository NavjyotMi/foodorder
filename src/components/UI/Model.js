import { Fragment } from "react";
import ReactDOM from "react-dom";

import classes from "./Model.module.css";
import React from "react";

function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.closeHandler}></div>;
}
function ModalOverlay(props) {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
}
const portalElement = document.getElementById("overlays");
function Model(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop closeHandler={props.closeHandler} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}

export default Model;
