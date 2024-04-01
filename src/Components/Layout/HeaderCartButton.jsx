import { useContext, useEffect, useState } from "react";
import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

function HeaderCartButton({ onClick }) {
  const { items } = useContext(CartContext);
  const [btnIsHighlighted, setbtnIsHighlighted] = useState(false);

  useEffect(() => {
    if (items.length === 0) return;
    setbtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setbtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  // To Cal numbers of item in the cart
  const numberOfCartItems = items.reduce((cur, item) => cur + item.amount, 0);
  const btnClasses = `${styles.button} ${btnIsHighlighted ? styles.bump : ""}`;
  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className="">Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
