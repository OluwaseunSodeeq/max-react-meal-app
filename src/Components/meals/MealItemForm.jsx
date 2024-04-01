import { useRef, useState } from "react";
import Input from "../Ui/Input";
import styles from "./MealItemForm.module.css";
function MealItemForm({ onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const enteredAmount = Number(amountInputRef.current.value);
    // console.log(typeof enteredAmount);
    // const enteredAmountNumber = +enteredAmount;
    if (enteredAmount === 0 || enteredAmount < 1 || enteredAmount > 5) {
      setAmountIsValid(false);
      return;
    }
    onAddToCart(enteredAmount);
  };

  return (
    <form className={styles.form} onSubmit={submitFormHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <span> Pleae entered valid amount (1-5)</span>}
    </form>
  );
}

export default MealItemForm;
