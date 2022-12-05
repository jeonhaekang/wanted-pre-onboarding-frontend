import { PERMISSION_ALL } from "../constants/permission";

import RouteComponent from "../components/common/RouteComponent";
import MainContainer from "../pages/MainContainer";

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
];

export default defaultRoutes;
