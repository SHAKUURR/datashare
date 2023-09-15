import React from "react";
import "../styles/vendata.css";
import "../styles/activity.css";
import SideBar from "../components/sidebar";
import Header from "../components/header";

function VendData() {
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
	function handleBackClick() {
		window.history.back();
	}
	return (
		<section className="main-content">
			<section className="vend-data">
				<button onClick={handleBackClick} className="back">
					<i className="fa-solid fa-arrow-left"></i> Back
				</button>

				{/* form */}
				<form action="" method="">
					<h2>Vend Data</h2>
					<input
						type="number"
						name="data_amount"
						id="data_amount"
						placeholder="Data Amount"
					/>
					<h3>Network Provider</h3>
					<select name="network_provider" id="network_provider"></select>
					<select name="plan" id="plan" defaultValue={"plan"}>
						<option value="plan" disabled hidden>
							Plan
						</option>
					</select>
					<div className="beneficiary">
						<label className="switch">
							<input type="checkbox" />
							<span className="slider round"></span>
						</label>
						<p>Save Beneficiary</p>
					</div>
					<button type="submit">Vend Data</button>
				</form>
			</section>

			{/* activity section */}
			<section className="activity-section">
				<div className="activity">
					<div className="activity-header">
						<h2>Activity</h2>
						<select name="time" id="time2" defaultValue={"This Week"}>
							<option value="" disabled hidden>
								This Week
							</option>
							<option value="today">Today</option>
							<option value="week">This Week</option>
							<option value="month">This Month</option>
							<option value="year">This Year</option>
						</select>
					</div>
					<div className="activity-main">
						<canvas id="activityChart"></canvas>
						<div className="legend">
							<div className="leg">
								<div className="dot dot1"></div>
								<p>Daily Payment</p>
							</div>
							<div className="leg">
								<div className="dot dot2"></div>
								<p>Hobby</p>
							</div>
						</div>
						<div className="view">
							<p>View all activity</p>
							<i className="fa-solid fa-arrow-right"></i>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default VendData;
