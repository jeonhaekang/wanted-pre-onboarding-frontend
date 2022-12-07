import styles from "./MainContainer.module.scss";

import Button, { BUTTON_COLOR_WHITE } from "components/core/Button";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainContainer = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("todo");
    }
  }, [navigate]);

  return (
    <div>
      <h1 className="common-title">메인페이지</h1>

      <div className={styles["button-box"]}>
        <Button to={"login"}>로그인</Button>

        <Button to={"join"} color={BUTTON_COLOR_WHITE}>
          회원가입
        </Button>
      </div>
    </div>
  );
};

export default MainContainer;
