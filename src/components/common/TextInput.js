import styles from "./TextInput.module.scss";
import cn from "classnames";

import { useMemo } from "react";

import Input from "components/core/Input";
import Label, { LABEL_COLOR_MESSAGE } from "components/core/Label";

const TextInput = (props) => {
  const { title, message, required } = props;

  const _props = useMemo(() => {
    const __props = { ...props };

    ["title", "message"].forEach((key) => {
      delete __props[key];
    });

    return __props;
  }, [props]);

  return (
    <div className={cn(styles["text-input"])}>
      {title && <Label required={required}>{title}</Label>}

      <Input {..._props} />

      {message && <Label color={LABEL_COLOR_MESSAGE}>{message}</Label>}
    </div>
  );
};

export default TextInput;
