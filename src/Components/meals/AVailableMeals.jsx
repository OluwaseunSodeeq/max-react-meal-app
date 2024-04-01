import Card from "../Ui/Card";
import styles from "./AVailableMeals.module.css";
import MealItem from "./MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

function AVailableMeals() {
  // console.log(DUMMY_MEALS);
  const mealLists = DUMMY_MEALS.map((meal) => (
    <MealItem meal={meal} key={meal.id} />
  ));

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealLists}</ul>
      </Card>
    </section>
  );
}

export default AVailableMeals;
