import { useCallback, useRef, useState } from "react";

const useForm = (initForm) => {
  const [validation, setValidation] = useState(false);

  const data = useRef(initForm);

  const checkValidation = useCallback(() => {
    const result = Object.keys(data.current).every((name) => {
      const input = document.getElementsByName(name)[0];

      const { required, validity } = input;

      return required ? validity.valid : true;
    }, []);

    setValidation(result);
  }, []);

  const setValue = useCallback(
    (e) => {
      const { name, value } = e.target;

      checkValidation();

      data.current = { ...data.current, [name]: value };
    },
    [checkValidation]
  );

  const getData = useCallback(() => {
    return data.current;
  }, []);

  return { setValue, getData, validation };
};

export default useForm;
