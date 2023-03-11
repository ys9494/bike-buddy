import Main from "../pages/MainPage/Main";
import NotFound from "../pages/NotFoundPage/NotFound";
import Login from "../pages/LoginPage/Login";
import Signup from "../pages/SignupPage/Signup";
import Gethering from "../pages/GetheringPage/Gethering";
import Usergethering from "../pages/UsergetheringPage/Usergethering";
import Getheringlist from "../pages/GetheringlistPage/Getheringlist";

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
  GETHERING: {
    path: "/gethering",
    link: "/gethering",
    element: Gethering,
  },
  USERGETHERING: {
    path: "/usergethering",
    link: "/usergethering",
    element: Usergethering,
  },
  GETHERINGLIST: {
    path: "/getheringlist",
    link: "/getheringlist",
    element: Getheringlist,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
