import styles from "./JoinContainer.module.scss";

import { useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import AccountModel from "model/AccountModel";

import useForm from "hooks/useForm";

import TextInput from "components/common/TextInput";
import Button from "components/core/Button";

const INIT_FORM = {
  email: "",
  password: "",
};

const JoinContainer = () => {
  const navigate = useNavigate();

  const { setValue, getData, validation } = useForm(INIT_FORM);

  const account = useMemo(() => new AccountModel(), []);

  const requestJoin = useCallback(
    async (e) => {
      e.preventDefault();
      const response = await account.join(getData());

      if (account.isSuccess(response)) {
        localStorage.setItem("token", response.data.access_token);

        alert("회원가입에 성공하였습니다.");
        navigate("/");
      }

      if (account.isError(response)) {
        alert(response.data.message);
      }
    },
    [account, getData, navigate]
  );

  return (
    <div>
      <h1 className="common-title">회원가입</h1>

      <form className={styles["join-form"]} onSubmit={requestJoin}>
        <TextInput
          type={"email"}
          name={"email"}
          message={"이메일 형식으로 입력해 주세요."}
          title={"아이디"}
          required
          onChange={setValue}
        />

        <TextInput
          type={"password"}
          name={"password"}
          message={"최소 8자 이상 입력해 주세요."}
          title={"비밀번호"}
          minLength={8}
          required
          onChange={setValue}
        />
        <Button disabled={!validation}>회원가입</Button>
      </form>
    </div>
  );
};

export default JoinContainer;
