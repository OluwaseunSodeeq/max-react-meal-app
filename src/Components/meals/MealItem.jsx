import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
function MealItem({ meal }) {
  const { name, description, price } = meal;
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
      {name}
    </li>
  );
}

export default MealItem;
