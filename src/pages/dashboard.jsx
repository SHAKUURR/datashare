import React from "react";
import "../styles/dashboard.css";
import SideBar from "../components/sidebar";
import Header from "../components/header";

function Dashboard() {
	return (
		<div className="body">
			<SideBar />
			<main>
				<Header />
				<MainContent />
			</main>
		</div>
	);
}

function MainContent() {
	return (
		<section className="main-content">
			<section className="wallet-section">
				<p>
					Welcome <span className="welcomename">,</span>{" "}
					<span className="account">Account Number: 2352672636 Wema Bank</span>
				</p>
				<div className="balance-container">
					<div className="balance">
						<i className="fa-solid fa-wallet fa-2x"></i>
						<p>Wallet Balance</p>
						<h4 className="amount">0.00</h4>
					</div>
					<div className="balance">
						<i className="fa-solid fa-wallet fa-2x"></i>
						<p>Airtel CG Portal Balance</p>
						<h4 className="airtelCG">0.00</h4>
					</div>
					<div className="balance">
						<i className="fa-solid fa-wallet fa-2x"></i>
						<p>Mtn SME Portal Balance</p>
						<h4 className="mtnSME">0.00</h4>
					</div>
					<div className="balance">
						<i className="fa-solid fa-wallet fa-2x"></i>
						<p>Mtn Data Gifting Balance</p>
						<h4 className="mtnCG">0.00</h4>
					</div>
					<div className="balance">
						<i className="fa-solid fa-wallet fa-2x"></i>
						<p>More</p>
					</div>
				</div>
			</section>

			{/* Quick Links Section */}
			<section className="quick-links">
				<h2>Quick Links</h2>
				<div className="links-container">
					<div className="link">
						<a href="addfunds">
							<i className="fa-regular fa-square-plus fa-2x"></i>
							<p>Add funds</p>
						</a>
					</div>
					<div className="link">
						<a href="vend-data.html">
							<i className="fa-regular fa-paper-plane fa-2x"></i>
							<p>Vend Data</p>
						</a>
					</div>
					<div className="link">
						<a href="buy-bundle.html">
							<i className="fa-solid fa-money-bills fa-2x"></i>
							<p>Buy Data</p>
						</a>
					</div>
					<div className="link">
						<a href="reset-api-key.html">
							<i className="fa-solid fa-clock-rotate-left fa-2x"></i>
							<p>Reset API key</p>
						</a>
					</div>
				</div>
			</section>

			{/* Analytics section  */}
			<section className="analytics">
				<div className="analytics-header">
					<h3>Analytics</h3>
					<div className="chart-activity">
						<div className="come">
							<div className="dot dot1"></div>
							<p>Income</p>
						</div>
						<div className="come">
							<div className="dot dot2"></div>
							<p>Outcome</p>
						</div>
						<select name="year" id="year">
							<option value="2023">2023</option>
						</select>
					</div>
				</div>
				<canvas id="myChart"></canvas>
			</section>

			{/* Transaction section */}
			<section className="transaction">
				<div className="transaction-header">
					<h2>Transactions</h2>
					<div className="inputs">
						<input
							type="search"
							name="table-search"
							id="table-search"
							placeholder="Search for anything..."
						/>
						<select name="time" id="time" defaultValue="week">
							<option value="" disabled hidden>
								This Week
							</option>
							<option value="today">Today</option>
							<option value="week">This Week</option>
							<option value="month">This Month</option>
							<option value="year">This Year</option>
						</select>
					</div>
				</div>
				<table id="table">
					<tbody id="transaction-container">
						<tr>
							<th>Number</th>
							<th>Date</th>
							<th>Amount</th>
							<th>Status</th>
						</tr>
						<tr>
							<td>Data Recharge</td>
							<td>Fri,20 Jan 2023</td>
							<td>N20,000</td>
							<td>
								<div className="success">Deposited</div>
							</td>
						</tr>
					</tbody>
				</table>
				<a href="transactions.html">
					<div className="viewmore">View More...</div>
				</a>
			</section>
		</section>
	);
}
export default Dashboard;
