import { Fragment } from "react";
import AVailableMeals from "./AVailableMeals";
import MealSummary from "./MealSummary";

function Meals() {
  return (
    <Fragment>
      <MealSummary />
      <AVailableMeals />
    </Fragment>
  );
}

export default Meals;
