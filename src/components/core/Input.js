import styles from "./Input.module.scss";
import cn from "classnames";

import { useCallback, useMemo, useState } from "react";

const Input = (props) => {
  const { onChange } = props;

  const [isError, setIsError] = useState(false);

  const _props = useMemo(() => {
    const __props = { ...props };

    ["onChange"].forEach((key) => {
      delete __props[key];
    });

    return __props;
  }, [props]);

  const onChangeHandler = useCallback(
    (e) => {
      const { value, validity } = e.target;

      const valid = validity.valid;

      setIsError(!valid && value);

      onChange && onChange(e);
    },
    [onChange]
  );

  return (
    <input
      onChange={onChangeHandler}
      onInvalid={(e) => {
        e.preventDefault();
      }}
      className={cn(styles.input, { [styles.error]: isError })}
      {..._props}
    />
  );
};

export default Input;
