import React from "react";
import "../styles/header.css";

function Header() {
	return (
		<>
			<section className="header" id="header">
				<input
					type="search"
					name="search"
					id="search"
					placeholder="Search for anything..."
				/>
				<div className="header-icons">
					<i className="fa-regular fa-bell"></i>
					<a href="./settings.html">
						<i className="fa-solid fa-gear"></i>
					</a>
				</div>

				{/* mobile-header */}
				<div className="mobile-header">
					<img src="/img/Logo2.png" alt="Logo" />
					<div className="icons-container">
						<i className="fa-solid fa-bell fa-lg"></i>
						<i className="fa-solid fa-bars fa-lg" id="menu-icon"></i>
					</div>
				</div>

				{/* responsive menu */}
				<div className="res-menu">
					<ul>
						<li>
							<a href="./dashboard.html" className="menu-item current-page">
								<i className="fa-solid fa-table fa-lg"></i>
								<p>DashBoard</p>
							</a>
						</li>
						<li>
							<a href="./vend-data.html" className="menu-item">
								<i className="fa-regular fa-credit-card fa-lg"></i>
								<p>Vend Data</p>
							</a>
						</li>
						<li>
							<a href="./transactions.html" className="menu-item">
								<i className="fa-solid fa-list fa-lg"></i>
								<p>Transactions</p>
							</a>
						</li>
						<li>
							<a href="./analytics.html" className="menu-item">
								<i className="fa-solid fa-chart-line fa-lg"></i>
								<p>Analytics</p>
							</a>
						</li>
						<li>
							<a href="./settings.html" className="menu-item">
								<i className="fa-solid fa-sliders fa-lg"></i>
								<p>Settings</p>
							</a>
						</li>
						<li>
							<a href="./help.html" className="menu-item">
								<i className="fa-regular fa-user fa-lg"></i>
								<p>Help & Support</p>
							</a>
						</li>
					</ul>
				</div>
			</section>
			<hr />
		</>
	);
}
export default Header;
