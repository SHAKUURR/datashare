import React from "react";
import "../styles/sidebar.css";

function SideBar() {
	return (
		<section className="sidebar" id="sidebar">
			<img src="/img/Logo2.png" alt="Data Share Portal Logo" />
			<div className="account">
				<div className="aka">SA</div>
				<p className="currentusername">Adedokun Peace</p>
			</div>
			<hr />
			<div className="menu">
				<a href="./dashboard.html" className="menu-item current-page">
					<i className="fa-solid fa-table fa-lg"></i>
					<p>DashBoard</p>
				</a>
				<a href="./vend-data.html" className="menu-item">
					<i className="fa-regular fa-credit-card fa-lg"></i>
					<p>Vend Data</p>
				</a>
				<a href="./transactions.html" className="menu-item">
					<i className="fa-solid fa-list fa-lg"></i>
					<p>Transactions</p>
				</a>
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
			<div className="logout" id="logout">
				<i className="fa-solid fa-arrow-left"></i>
				<p>Logout</p>
			</div>
		</section>
	);
}

export default SideBar;
