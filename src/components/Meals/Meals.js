import React, { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealSummary";

function Meals() {
  return (
    <Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </Fragment>
  );
}

export default Meals;
