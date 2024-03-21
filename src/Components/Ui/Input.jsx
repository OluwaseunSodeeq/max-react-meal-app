import styles from "./Input.module.css";
function Input({ label, input }) {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id} className="">
        {label}
      </label>
      <input id={input.id} {...input} />
    </div>
  );
}

export default Input;
