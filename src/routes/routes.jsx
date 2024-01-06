import { useRoutes } from "react-router-dom";
import { Home } from "../pages";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
];

export const Routes = () => {
  return useRoutes(routes);
};
