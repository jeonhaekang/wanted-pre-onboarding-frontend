import styles from "./Label.module.scss";
import cn from "classnames";

export const LABEL_SIZE_SMALL = "small";
export const LABEL_SIZE_LARGE = "large";

export const LABEL_COLOR_DEFAULT = "default";
export const LABEL_COLOR_MESSAGE = "message";
export const LABEL_COLOR_ERROR = "error";

const Label = (props) => {
  const { size = LABEL_SIZE_SMALL, color, children, required } = props;

  return (
    <p className={cn(styles.label, styles[size], styles[color])}>
      {children}
      {required && <span className={styles.required}>*</span>}
    </p>
  );
};

export default Label;
