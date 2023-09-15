import React from "react";

function Activity() {
	return (
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
	);
}

export default Activity;
