import React from "react";
import Register from "../pages/signup";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import RecoverPassword from "../pages/recoverPassword";
import RecoverLink from "../pages/recoverLink";

const pageRoutes = [
	{ path: "/signup", element: <Register /> },
	{ path: "/login", element: <Login /> },
	{ path: "/dashboard", element: <Dashboard /> },
	{ path: "/recoverpassword", element: <RecoverPassword /> },
	{ path: "/recoverlink", element: <RecoverLink /> },
];
export default pageRoutes;
