// import React from "react";

// import { Route, Routes } from "react-router-dom";

// import { ROUTES } from "../utils/routes";
import SignUp from "../Components/User/Signup";
import Login from "../Components/User/Login";
import Products from "../Components/Products/product";

// const AuthRoutes = () => (
//   <Routes>
//     <Route path={ROUTES.AUTH_ROUTES.signup} element={<SignUp />} />
//     <Route path={ROUTES.AUTH_ROUTES.login} element={<Login />} />
//     <Route path={ROUTES.AUTH_ROUTES.product} element={<Products />} />
//   </Routes>
// );

// export default AuthRoutes;

import { ROUTES } from "../utils/routes";
export const AUTH_ROUTES = [
  {
    id: 1,
    path: ROUTES.AUTH_ROUTES_NAMES.login,
    element: <Login />,
  },
  {
    id: 2,
    path: ROUTES.AUTH_ROUTES_NAMES.signup,
    element: <SignUp />,
  },
  {
    id: 3,
    path: ROUTES.AUTH_ROUTES_NAMES.product,
    element: <Products />,
  },
  {
    id: 4,
    path: ROUTES.AUTH_ROUTES_NAMES.resetPassword,
    element: <h1>reset password</h1>,
  },
  {
    id: 5,
    path: ROUTES.AUTH_ROUTES_NAMES.forgotPassword,
    element: <h1>forgot password</h1>,
  },
];
