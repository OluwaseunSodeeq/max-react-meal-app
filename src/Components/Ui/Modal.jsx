import { Fragment } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";

function BackDrop() {
  return <div className={styles.backdrop}></div>;
}

function ModalOverlay({ children }) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
const portalElement = document.getElementById("overlays");
function Modal({ children }) {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
}
export default Modal;
