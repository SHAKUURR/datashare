import React from "react";
import "../styles/analyticspage.css";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import Activity from "../components/activity";

function AnalyticsPage() {
	return (
		<div className="body">
			<SideBar />
			<main>
				<Header />
				<MainContente />
			</main>
		</div>
	);
}

function MainContente() {
	return (
		<section className="main-content">
			<AnalyticsGraph />
			<Activity />
		</section>
	);
}

function AnalyticsGraph() {
	function handleBackClick() {
		window.history.back();
	}
	return (
		<section className="bar-chart">
			<button onClick={handleBackClick} className="back">
				<i className="fa-solid fa-arrow-left"></i> Back
			</button>
			<div className="bar">
				<div className="bar-header">
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
						<select name="year" id="year" defaultValue={2023}>
							<option value="2023" disabled hidden>
								2023
							</option>
						</select>
					</div>
				</div>
				<canvas id="myChart"></canvas>
			</div>
		</section>
	);
}
export default AnalyticsPage;
