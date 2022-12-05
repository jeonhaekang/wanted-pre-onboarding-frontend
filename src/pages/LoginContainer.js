import styles from "./LoginContainer.module.scss";

import { useCallback } from "react";

import useForm from "hooks/useForm";

import TextInput from "components/common/TextInput";
import Button from "components/core/Button";

const INIT_FORM = {
  id: "",
  password: "",
};

const LoginContainer = () => {
  const { setValue, getData, validation } = useForm(INIT_FORM);

  const requestLogin = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div>
      <h1 className="common-title">로그인</h1>

      <form className={styles["login-form"]} onSubmit={requestLogin}>
        <TextInput
          type={"text"}
          name={"id"}
          title={"아이디"}
          required
          onChange={setValue}
        />

        <TextInput
          type={"password"}
          name={"password"}
          title={"비밀번호"}
          required
          onChange={setValue}
        />
        <Button disabled={!validation}>로그인</Button>
      </form>
    </div>
  );
};

export default LoginContainer;
