import React from "react";
import {
  // useNavigate,
  // BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { PROTECTED_ROUTES } from "./appRoutes";
import { AUTH_ROUTES } from "./auth";
import { ROUTES } from "../utils/routes";
import { PUBLIC_ROUTES } from "./publicRoutes";
const AllRoutes = () => {
  let user_login = false;
  return (
    <Routes>
      {PUBLIC_ROUTES.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={route.element}
        />
      ))}
      {PROTECTED_ROUTES.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            user_login ? (
              route.element
            ) : (
              <Navigate to={ROUTES.AUTH_ROUTES_NAMES.login} replace />
            )
          }
        />
      ))}
      {AUTH_ROUTES.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          element={
            !user_login ? (
              route.element
            ) : (
              <Navigate to={ROUTES.PROTECTED_ROUTES_NAMES.root} replace />
            )
          }
        />
      ))}
     
      <Route path="*" element={<div>Page not Found 404 </div>} />
    </Routes>
  );
};

export default AllRoutes;
