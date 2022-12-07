import { useCallback, useState } from "react";
import { useMount } from "./useMount";

const useForm = (formId, initForm) => {
  const [validation, setValidation] = useState(false);

  const [form, setForm] = useState(initForm);

  const checkValidation = useCallback(() => {
    const _form = document.getElementById(formId);

    const _inputs = _form.getElementsByTagName("input");

    let result = true;

    for (const _input of _inputs) {
      const { required, validity } = _input;

      if (required && !validity.valid) {
        result = false;
      }
    }

    setValidation(result);
  }, [formId]);

  const setValue = useCallback(
    (e) => {
      const { name, value } = e.target;

      checkValidation();

      setForm((prev) => {
        return { ...prev, [name]: value };
      });
    },
    [checkValidation]
  );

  useMount(() => {
    checkValidation();
  });

  return { form, setForm, setValue, validation };
};

export default useForm;
