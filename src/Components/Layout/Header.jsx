import { Fragment } from "react";
import styles from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

function Header({ onshowCartHandler }) {
  return (
    <Fragment>
      <header className={styles.header}>
        <h1>Max Meals</h1>
        <HeaderCartButton onClick={onshowCartHandler} />
      </header>
      <div className={styles["main-image"]}>
        <img src="../meals.jpg" alt="meals" />
      </div>
    </Fragment>
  );
}

export default Header;
