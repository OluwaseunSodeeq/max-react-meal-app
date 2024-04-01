import { useContext } from "react";
import Modal from "../Ui/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

function Cart({ onshowCartHandler }) {
  const { items, totalAmount, removeItem, addItem } = useContext(CartContext);
  const hasItem = items.length > 0;
  const aggregateAmount = totalAmount.toFixed(2);
  // console.log(items);

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        >
          {item.name}
        </CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={onshowCartHandler}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{hasItem ? aggregateAmount : 0}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={onshowCartHandler}>
          Close
        </button>
        {hasItem && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;
