import Header from "./components/Header";
import { ROUTE_ARR } from "./routes/route";
import { Route, Routes } from "react-router-dom";
import { NavermapsProvider } from "react-naver-maps";

function App() {
  return (
    <>
      <NavermapsProvider
        ncpClientId={process.env.REACT_APP_MAP_API_KEY}
        submodules={["panorama"]}
      >
        <Header />
        <Routes>
          {ROUTE_ARR.map((route, index) => {
            return (
              <Route
                path={route.path}
                element={<route.element />}
                key={index}
              />
            );
          })}
        </Routes>
      </NavermapsProvider>
    </>
  );
}

export default App;
