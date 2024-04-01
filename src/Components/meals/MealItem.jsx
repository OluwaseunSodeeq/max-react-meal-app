import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);
  const { id, name, description, price } = meal;
  const addToCartHandler = (amount) => {
    addItem({ id, name, price, amount });
  };
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>${price.toFixed(2)}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
      {name}
    </li>
  );
}

export default MealItem;
