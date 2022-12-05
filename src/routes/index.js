import { PERMISSION_ALL, PERMISSION_LOGIN } from "../constants/permission";

import RouteComponent from "../components/common/RouteComponent";
import MainContainer from "pages/MainContainer";
import LoginContainer from "pages/LoginContainer";
import JoinContainer from "pages/JoinContainer";
import TodoContainer from "pages/TodoContainer";

const defaultRoutes = [
  {
    path: "/",
    component: (
      <RouteComponent
        permission={PERMISSION_ALL}
        title={"메인페이지"}
        component={MainContainer}
      />
    ),
  },
  {
    path: "/login",
    component: (
      <RouteComponent
        permission={PERMISSION_ALL}
        title={"로그인"}
        component={LoginContainer}
      />
    ),
  },
  {
    path: "/join",
    component: (
      <RouteComponent
        permission={PERMISSION_ALL}
        title={"회원가입"}
        component={JoinContainer}
      />
    ),
  },
  {
    path: "/todo",
    component: (
      <RouteComponent
        permission={PERMISSION_LOGIN}
        title={"투두"}
        component={TodoContainer}
      />
    ),
  },
];

export default defaultRoutes;
