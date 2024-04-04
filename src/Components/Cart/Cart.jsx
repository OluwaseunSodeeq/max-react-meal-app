import { Fragment, useContext, useState } from "react";
import Modal from "../Ui/Modal";
import styles from "./Cart.module.css";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import Checkout from "./Checkout";

function Cart({ onshowCartHandler }) {
  const [isSUbmitting, setIsSubmitting] = useState(false);
  const [didSUbmitt, setDidSubmitt] = useState(false);
  const [checkout, setCheckout] = useState(false);
  const { items, totalAmount, removeItem, addItem, clearForm } =
    useContext(CartContext);

  const MEAL_URL =
    "https://meal-app-9e796-default-rtdb.firebaseio.com/orders.json";

  const hasItem = items.length > 0;
  const aggregateAmount = totalAmount.toFixed(2);
  // console.log(items);

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setCheckout(true);
  };

  const submitOrderHandler = async (order) => {
    setIsSubmitting(true);

    const res = await fetch(MEAL_URL, {
      method: "POST",
      body: JSON.stringify({
        user: order,
        orderItems: items,
      }),
    });

    const data = await res.json();
    console.log(order, data);
    setIsSubmitting(false);
    setDidSubmitt(true);
    clearForm();
  };

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const successfullySubmittingTheOrder = (
    <Fragment>
      <p>Successfully submitting the order data...</p>
      <button className={styles.button} onClick={onshowCartHandler}>
        Close
      </button>
    </Fragment>
  );
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
  const closeAndOrderbtns = (
    <div className={styles.actions}>
      <button className={styles["button--alt"]} onClick={onshowCartHandler}>
        Close
      </button>
      {hasItem && (
        <button className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );
  const modalContent = (
    <Fragment>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{hasItem ? aggregateAmount : 0}</span>
      </div>
      {checkout && (
        <Checkout onSubmit={submitOrderHandler} onCancel={onshowCartHandler} />
      )}
      {!checkout && closeAndOrderbtns}
    </Fragment>
  );
  return (
    <Modal onCloseCart={onshowCartHandler}>
      {!isSUbmitting && didSUbmitt && successfullySubmittingTheOrder}
      {isSUbmitting && isSubmittingModalContent}
      {!isSUbmitting && !didSUbmitt && modalContent}
    </Modal>
  );
}

export default Cart;
