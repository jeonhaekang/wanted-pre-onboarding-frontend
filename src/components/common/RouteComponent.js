import { PERMISSION_ALL, PERMISSION_LOGIN } from "constants/permission";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const RouteComponent = (props) => {
  const { permission, title, component: Component } = props;

  const navigate = useNavigate();

  const [render, setRender] = useState(false);

  useEffect(() => {
    document.querySelector("title").innerHTML = title;

    let passed = false;

    if (permission === PERMISSION_ALL) {
      passed = true;
    } else if (permission === PERMISSION_LOGIN) {
      const token = localStorage.getItem("token");

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
