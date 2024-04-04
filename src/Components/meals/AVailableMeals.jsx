import { useEffect, useState } from "react";

import Card from "../Ui/Card";
import styles from "./AVailableMeals.module.css";
import MealItem from "./MealItem";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 22.99,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 16.5,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12.99,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 18.99,
//   },
// ];

function AVailableMeals() {
  const MEAL_URL =
    "https://meal-app-9e796-default-rtdb.firebaseio.com/meal.json";
  const [meals, setmeals] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  // console.log(fetchFunc);
  useEffect(() => {
    setIsloading(true);
    setError(null);
    async function fetchMeal() {
      const res = await fetch(MEAL_URL);

      if (!res.ok) throw new Error("Something went wrong");
      const data = await res.json();
      // console.log(data); // the data is in object, covert to array with for in loop

      const dataArray = [];
      for (const key in data) {
        dataArray.push({
          id: key,
          description: data[key].description,
          name: data[key].name,
          price: data[key].price,
        });
      }
      setmeals(dataArray);
      setIsloading(false);
    }
    //New Approach
    fetchMeal().catch((error) => {
      setError(error.message);
      setIsloading(false);
    });
  }, []);

  // console.log(DUMMY_MEALS);
  const mealLists = meals.map((meal) => <MealItem meal={meal} key={meal.id} />);
  if (isLoading) {
    return <p className="mealsLoading">Loading...</p>;
  }
  return (
    <section className={styles.meals}>
      <Card>
        {error ? <p className="mealsError">{error}</p> : <ul>{mealLists}</ul>}
      </Card>
    </section>
  );
}

export default AVailableMeals;
