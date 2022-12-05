import { useEffect } from "react";

const RouteComponent = (props) => {
  const { title, component: Component } = props;

  useEffect(() => {
    document.querySelector("title").innerHTML = title;
  }, [title]);

  return <Component />;
};

export default RouteComponent;
