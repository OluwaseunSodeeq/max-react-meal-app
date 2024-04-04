import { useRef, useState } from "react";
import styles from "./Checkout.module.css";

function Checkout({ onSubmit, onCancel }) {
  const [formValidity, setformValidity] = useState({
    name: true,
    subject: true,
    postalCode: true,
    city: true,
  });
  const inputName = useRef();
  const inputSubject = useRef();
  const inputPostal = useRef();
  const inputCity = useRef();

  const isEMpty = (value) => value.trim() === "";

  const onConfirmHandler = (e) => {
    e.preventDefault();
    const enteredName = inputName.current.value;
    const enteredSubject = inputSubject.current.value;
    const enteredpostal = inputPostal.current.value;
    const enteredCity = inputCity.current.value;

    const enteredNameIsValid = !isEMpty(enteredName);
    const enteredSubjectIsValid = !isEMpty(enteredSubject);
    const enteredpostalIsValid = !isEMpty(enteredpostal);
    const enteredCityIsValid = !isEMpty(enteredCity);

    setformValidity({
      name: enteredNameIsValid,
      subject: enteredSubjectIsValid,
      postalCode: enteredpostalIsValid,
      city: enteredCityIsValid,
    });

    const enteredDataIsValid =
      enteredCityIsValid &&
      enteredNameIsValid &&
      enteredSubjectIsValid &&
      enteredpostalIsValid;

    if (!enteredDataIsValid) return;

    onSubmit({
      name: enteredName,
      subject: enteredSubject,
      postalCode: enteredpostal,
      city: enteredCity,
    });
    console.log("Hello");
  };

  return (
    <form onSubmit={onConfirmHandler} className={styles.form}>
      <div
        className={`${styles.control} ${
          formValidity.name ? "" : styles.invalid
        }`}
      >
        <label htmlFor="name">Your Name</label>
        <input ref={inputName} type="text" id="name" />
        {!formValidity.name && <p>Please Enter a valid Name</p>}
      </div>
      <div
        className={`${styles.control} ${
          formValidity.subject ? "" : styles.invalid
        }`}
      >
        <label htmlFor="subject">Street</label>
        <input ref={inputSubject} type="text" id="subject" />
        {!formValidity.subject && <p>Please Enter a valid subject</p>}
      </div>
      <div
        className={`${styles.control} ${
          formValidity.postalCode ? "" : styles.invalid
        }`}
      >
        <label htmlFor="postal">Postal code</label>
        <input ref={inputPostal} type="text" id="postal" />
        {!formValidity.postalCode && <p>Please Enter a valid postal Code</p>}
      </div>
      <div
        className={`${styles.control} ${
          formValidity.city ? "" : styles.invalid
        }`}
      >
        <label htmlFor="city">City</label>
        <input ref={inputCity} type="text" id="city" />
        {!formValidity.city && <p>Please Enter a valid city</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;
