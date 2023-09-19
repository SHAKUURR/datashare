import React from "react";
import Register from "../pages/signup";
import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
import VendData from "../pages/vendData";
import BuyBundle from "../pages/buyBundle";
import Transactions from "../pages/transaction";
import RecoverPassword from "../pages/recoverPassword";
import RecoverLink from "../pages/recoverLink";
import ResetApi from "../pages/resetApi";
const pageRoutes = [
	{ path: "/signup", element: <Register /> },
	{ path: "/login", element: <Login /> },
	{ path: "/dashboard", element: <Dashboard /> },
	{ path: "/recoverpassword", element: <RecoverPassword /> },
	{ path: "/recoverlink", element: <RecoverLink /> },
	{ path: "/resetapi", element: <ResetApi /> },
	{ path: "/vendata", element: <VendData /> },
	{ path: "/transactions", element: <Transactions /> },
	{ path: "/buybundle", element: <BuyBundle /> },
];
export default pageRoutes;
