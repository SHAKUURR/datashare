import React from "react";
import { useState } from "react";
import "../styles/sidebar.css";
import { Link } from "react-router-dom";

function SideBar() {
	const [currentMenu, setCurrentMenu] = useState("/dashboard");
	function handleMenuClick(to) {
		setCurrentMenu(to);
	}
	return (
		<section className="sidebar" id="sidebar">
			<img src="/img/Logo2.png" alt="Data Share Portal Logo" />
			<div className="account">
				<div className="aka">SA</div>
				<p className="currentusername">Adedokun Peace</p>
			</div>
			<hr />
			<div className="menu">
				<Link
					to={"/dashboard"}
					className={`menu-item ${
						currentMenu === "/dashboard" ? "current-page" : ""
					}`}
					onClick={() => handleMenuClick("/dashboard")}
				>
					<i className="fa-solid fa-table fa-lg"></i>
					<p>DashBoard</p>
				</Link>
				<Link
					to={"/vendata"}
					className={`menu-item ${
						currentMenu === "/vendata" ? "current-page" : ""
					}`}
					onClick={() => handleMenuClick("/vendata")}
				>
					<i className="fa-regular fa-credit-card fa-lg"></i>
					<p>Vend Data</p>
				</Link>
				<Link to={"/transactions"} className="menu-item">
					<i className="fa-solid fa-list fa-lg"></i>
					<p>Transactions</p>
				</Link>
				<a href="./analytics.html" className="menu-item">
					<i className="fa-solid fa-chart-line fa-lg"></i>
					<p>Analytics</p>
				</a>
				<div className="dropdown" data-dropdown>
					<button className="menu-item link" data-dropdown-button>
						<i className="fa-solid fa-gear fa-lg"></i>
						<p>Settings</p>
					</button>
					<div className="dropdown-menu">
						<a href="change-password.html">Change Password</a>
						<a href="change-pin.html">Change Pin</a>
						<a href="reset-api-key.html">Reset API Key</a>
					</div>
				</div>
				<a href="./help.html" className="menu-item">
					<i className="fa-regular fa-user fa-lg"></i>
					<p>Help & Support</p>
				</a>
			</div>
			<Link to={"/login"}>
				<div className="logout" id="logout">
					<i className="fa-solid fa-arrow-left"></i>
					<p>Logout</p>
				</div>
			</Link>
		</section>
	);
}

export default SideBar;
