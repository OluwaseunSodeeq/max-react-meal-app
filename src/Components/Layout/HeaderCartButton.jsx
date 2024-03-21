import CartIcon from "../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";

function HeaderCartButton({ onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className="">Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}

export default HeaderCartButton;
