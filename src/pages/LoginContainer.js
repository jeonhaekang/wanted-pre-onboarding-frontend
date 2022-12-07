import styles from "./LoginContainer.module.scss";

import { useCallback, useMemo } from "react";

import useForm from "hooks/useForm";

import TextInput from "components/common/TextInput";
import Button from "components/core/Button";
import AccountModel from "model/AccountModel";
import { useNavigate } from "react-router-dom";

const INIT_FORM = {
  email: "",
  password: "",
};

const LoginContainer = () => {
  const navigate = useNavigate();

  const { setValue, getData, validation } = useForm(INIT_FORM);

  const account = useMemo(() => new AccountModel(), []);

  const requestLogin = useCallback(
    async (e) => {
      e.preventDefault();

      const response = await account.login(getData());

      if (account.isSuccess(response)) {
        localStorage.setItem("token", response.data.access_token);

        navigate("/");
      }

      if (account.isError(response)) {
        alert("로그인 실패, 아이디나 비밀번호를 확인해 주세요");
      }
    },
    [account, getData, navigate]
  );

  return (
    <div>
      <h1 className="common-title">로그인</h1>

      <form className={styles["login-form"]} onSubmit={requestLogin}>
        <TextInput
          type={"text"}
          name={"email"}
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
