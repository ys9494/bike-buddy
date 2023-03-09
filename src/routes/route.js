import Main from "../pages/MainPage/Main";
import NotFound from "../pages/NotFoundPage/NotFound";
import Login from "../pages/LoginPage/Login";
import Signup from "../pages/SignupPage/Signup";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Main,
  },
  NOTFOUND: {
    path: "*",
    element: NotFound,
  },
  LOGIN: {
    path: "/login",
    link: "/login",
    element: Login,
  },
  SGINUP: {
    path: "/signup",
    link: "/signup",
    element: Signup,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
