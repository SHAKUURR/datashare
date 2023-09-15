import React from "react";

function TransactionTable() {
	function handleBackClick() {
		window.history.back();
	}
	return (
		<section className="table-container">
			<button onClick={handleBackClick}>
				<i className="fa-solid fa-arrow-left"></i> Back
			</button>
			<div className="table">
				<div className="table-header">
					<h2>Transactions</h2>
					<div className="inputs">
						<input
							type="search"
							name="table-search"
							id="table-search"
							placeholder="Search for anything..."
						/>
						<select name="time" id="time" defaultValue={"all"}>
							{/* <option value="" disabled selected hidden>All</option> */}
							<option value="all">All</option>
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
						<tr>
							<td>Airtime</td>
							<td>Thur,19 Jan 2023</td>
							<td>N45,000</td>
							<td>
								<div className="success">Deposited</div>
							</td>
						</tr>
						<tr>
							<td>Cable TV</td>
							<td>Wed,18 Jan 2023</td>
							<td>N22,000</td>
							<td>
								<div className="success">Deposited</div>
							</td>
						</tr>
					</tbody>
				</table>
				<div id="pagination" className="pagination"></div>
			</div>
		</section>
	);
}
export default TransactionTable;
