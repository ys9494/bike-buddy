import Header from "./components/Header";
import { ROUTE_ARR } from "./routes/route";
import { Route, Routes } from "react-router-dom";
import { NavermapsProvider } from "react-naver-maps";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<div>로딩중...</div>}>
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
    </Suspense>
  );
}

export default App;
