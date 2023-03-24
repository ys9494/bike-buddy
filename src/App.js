import Header from "./components/Header";
import { ROUTE_ARR } from "./routes/route";
import { Route, Routes } from "react-router-dom";
import { NavermapsProvider } from "react-naver-maps";
import { Suspense } from "react";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          Loading...
        </div>
      }
    >
      <NavermapsProvider
        ncpClientId={process.env.REACT_APP_MAP_API_KEY}
        submodules={["panorama"]}
      >
        <UserProvider>
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
        </UserProvider>
      </NavermapsProvider>
    </Suspense>
  );
}

export default App;
