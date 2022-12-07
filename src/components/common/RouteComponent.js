import {
  PERMISSION_ALL,
  PERMISSION_LOGIN,
  PERMISSION_NOT_LOGIN,
} from "constants/permission";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RouteComponent = (props) => {
  const { permission, title, component: Component } = props;

  const navigate = useNavigate();

  const [render, setRender] = useState(false);

  useEffect(() => {
    document.querySelector("title").innerHTML = title;

    let passed = false;

    const token = localStorage.getItem("token");

    if (permission === PERMISSION_ALL) {
      passed = true;
    } else if (permission === PERMISSION_NOT_LOGIN) {
      if (!token) {
        passed = true;
      }
    } else if (permission === PERMISSION_LOGIN) {
      if (token) {
        passed = true;
      }
    }

    if (!passed) {
      navigate("/");
    }

    setRender(passed);
  }, [navigate, permission, title]);

  return render && <Component />;
};

export default RouteComponent;
