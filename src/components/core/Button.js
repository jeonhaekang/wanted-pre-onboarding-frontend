import styles from "./Button.module.scss";
import cn from "classnames";

import { useMemo } from "react";
import { Link } from "react-router-dom";

export const BUTTON_SIZE_LARGE = "large";
export const BUTTON_SIZE_MEDIUM = "medium";
export const BUTTON_SIZE_SMALL = "small";

export const BUTTON_COLOR_BLUE = "blue";
export const BUTTON_COLOR_WHITE = "white";
export const BUTTON_COLOR_RED = "red";

const Button = (props) => {
  const {
    size = BUTTON_SIZE_MEDIUM,
    color = BUTTON_COLOR_BLUE,
    full,
    to,
  } = props;

  const _props = useMemo(() => {
    const __props = { ...props };

    ["size", "color", "full"].forEach((key) => {
      delete __props[key];
    });

    return __props;
  }, [props]);

  const Tag = useMemo(() => {
    let component = "button";

    if (to) {
      component = Link;
    }

    return component;
  }, [to]);

  const className = useMemo(() => {
    return cn(styles.button, styles[size], styles[color], full);
  }, [color, full, size]);

  return <Tag className={className} {..._props} />;
};

export default Button;
