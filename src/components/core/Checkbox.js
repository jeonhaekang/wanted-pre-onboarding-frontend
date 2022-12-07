import styles from "./Checkbox.module.scss";

const Checkbox = (props) => {
  return <input type={"checkbox"} className={styles["check-box"]} {...props} />;
};

export default Checkbox;
