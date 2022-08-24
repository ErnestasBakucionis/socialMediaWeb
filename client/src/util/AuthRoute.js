import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";

import { AuthContext } from "../context/auth";

function LoggedInRoute() {
  const { user } = useContext(AuthContext);

  return user ? <Navigate to="/" /> : <Outlet />;
}

function AnonymousRoute() {
  const { user } = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/" />;
}

export { LoggedInRoute, AnonymousRoute };
