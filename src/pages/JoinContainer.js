import styles from "./JoinContainer.module.scss";

import { useCallback } from "react";

import useForm from "hooks/useForm";

import TextInput from "components/common/TextInput";
import Button from "components/core/Button";

const INIT_FORM = {
  id: "",
  password: "",
};

const JoinContainer = () => {
  const { setValue, getData, validation } = useForm(INIT_FORM);

  const requestJoin = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div>
      <h1 className="common-title">회원가입</h1>

      <form className={styles["join-form"]} onSubmit={requestJoin}>
        <TextInput
          type={"email"}
          name={"id"}
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
