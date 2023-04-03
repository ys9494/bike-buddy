import Main from "../pages/MainPage/Main";
import NotFound from "../pages/NotFoundPage/NotFound";
import Login from "../pages/LoginPage/Login";
import Signup from "../pages/SignupPage/Signup";
<<<<<<< HEAD
=======
import Gathering from "../pages/GatheringPage/Gathering";
import Usergathering from "../pages/UsergatheringPage/Usergathering";
import Gatheringlist from "../pages/GatheringlistPage/Gatheringlist";
import RentalLocation from "../pages/RentalLocationPage/RentalLocation";
import Mygathering from "../pages/MygatheringPage/Mygathering";
>>>>>>> ae6b3686f611e9f24b84412fa8c92a9b924a3500

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
<<<<<<< HEAD
=======
  GATHERING: {
    path: "/gathering",
    link: "/gathering",
    element: Gathering,
  },
  USER_GATHERING: {
    path: "/gathering/:id/edit",
    link: "/gathering/:id/edit",
    element: Usergathering,
  },
  USER_GATHERING_EDIT: {
    path: "/usergathering/:id/edit",
    link: "/usergathering/:id/edit",
    element: Usergathering,
  },
  GATHERING_LIST: {
    path: "/gatheringlist",
    link: "/gatheringlist",
    element: Gatheringlist,
  },
  RENTALLOCATION: {
    path: "/location/rental",
    link: "/location/rental",
    element: RentalLocation,
  },
  MYGATHERING: {
    path: "/mygathering",
    link: "/mygathering",
    element: Mygathering,
  },
>>>>>>> ae6b3686f611e9f24b84412fa8c92a9b924a3500
};

export const ROUTE_ARR = Object.values(ROUTE);
