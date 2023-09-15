import React from "react";

function Analytics() {
	return (
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
	);
}

export default Analytics;
