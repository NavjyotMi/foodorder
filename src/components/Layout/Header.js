import classes from "./Header.module.css";

import React, { Fragment } from "react";
import mealImage from "../../asset/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Mealing</h1>
        <HeaderCartButton closeHandler={props.closeHandler}></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="nothing just people eating" />
      </div>
    </Fragment>
  );
}

export default Header;
