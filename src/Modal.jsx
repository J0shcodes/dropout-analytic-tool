import classes from "./styles/Modal.module.css";

const Modal = props => {
  return (
    <div className={classes.modal} onClick={props.onClose}>
      <div className={classes.content}>
        <div className={classes.body}>
          <p>
            For any challenge or problem you are facing that may affect your
            school work and caused you to dropout please approach any of the
            following:
          </p>

          <ul className={classes.list}>
            <li>Parent or Guardians,</li>
            <li>Class Teachers,</li>
            <li>Deputy Principal,</li>
            <li>Principal or</li>
            <li>Any School Teacher for help</li>
          </ul>
        </div>
        <div className={classes.footer}>
          <button onClick={props.onClose}>Ok</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
