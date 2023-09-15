import React from "react";
import { Link } from "react-router-dom";
function TransactionHistory() {
	return (
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
			<Link to={"/transactions"}>
				<div className="viewmore">View More...</div>
			</Link>
		</section>
	);
}

export default TransactionHistory;
