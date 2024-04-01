import { forwardRef } from "react"; // Import React
import styles from "./Input.module.css";

const Input = forwardRef(({ label, ...input }, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id} className="">
        {label}
      </label>
      <input id={input.id} {...input} ref={ref} /> {/* Pass "ref" as a prop */}
    </div>
  );
});

Input.displayName = "Input";
export default Input;
