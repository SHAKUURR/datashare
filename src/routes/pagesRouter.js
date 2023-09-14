import React from "react";
import Register from "../pages/signup";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";

const pageRoutes = [
	{ path: "/signup", element: <Register /> },
	{ path: "/login", element: <Login /> },
	{ path: "/dashboard", element: <Dashboard /> },
];
export default pageRoutes;
