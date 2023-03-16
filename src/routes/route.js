import Main from "../pages/MainPage/Main";
import NotFound from "../pages/NotFoundPage/NotFound";
import Login from "../pages/LoginPage/Login";
import Signup from "../pages/SignupPage/Signup";
import Gathering from "../pages/GatheringPage/Gathering";
import Usergathering from "../pages/UsergatheringPage/Usergathering";
import Gatheringlist from "../pages/GatheringlistPage/Gatheringlist";
import RentalLocation from "../pages/RentalLocationPage/RentalLocation";

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
  GATHERING: {
    path: "/gathering",
    link: "/gathering",
    element: Gathering,
  },
  USERGATHERING: {
    path: "/usergathering",
    link: "/usergathering",
    element: Usergathering,
  },
  GATHERINGLIST: {
    path: "/gatheringlist",
    link: "/gatheringlist",
    element: Gatheringlist,
  },
  RENTALLOCATION: {
    path: "/location/rental",
    link: "/location/rental",
    element: RentalLocation,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
