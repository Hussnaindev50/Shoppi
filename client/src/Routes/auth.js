import React from "react";

import { Route, Routes } from "react-router-dom";

import { ROUTES } from "../utils/routes";
import SignUp from "../Components/User/Signup";
import Login from "../Components/User/Login";
import Products from "../Components/Products/product";

const AuthRoutes = () => (
  <Routes>
    <Route path={ROUTES.AUTH_ROUTES.signup} element={<SignUp />} />
    <Route path={ROUTES.AUTH_ROUTES.login} element={<Login />} />
    <Route path={ROUTES.AUTH_ROUTES.product} element={<Products />} />
  </Routes>
);

export default AuthRoutes;
