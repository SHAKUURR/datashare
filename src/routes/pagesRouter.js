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
import AnalyticsPage from "../pages/analyticspage";
import ChangePassword from "../pages/changePassword";
import ChangePin from "../pages/changePin";
import AdminDashboard from "../adminPages/adminDashboard";
import ManageUser from "../adminPages/manage-user";
const pageRoutes = [
	{ path: "/signup", element: <Register /> },
	{ path: "/login", element: <Login /> },
	{ path: "/dashboard", element: <Dashboard /> },
	{ path: "/recoverpassword", element: <RecoverPassword /> },
	{ path: "/analytics", element: <AnalyticsPage /> },
	{ path: "/changepassword", element: <ChangePassword /> },
	{ path: "/changepin", element: <ChangePin /> },
	{ path: "/recoverlink", element: <RecoverLink /> },
	{ path: "/resetapi", element: <ResetApi /> },
	{ path: "/vendata", element: <VendData /> },
	{ path: "/transactions", element: <Transactions /> },
	{ path: "/buybundle", element: <BuyBundle /> },
	{ path: "/adminDashboard", element: <AdminDashboard /> },
	{ path: "/manage-user", element: <ManageUser /> },
];
export default pageRoutes;
