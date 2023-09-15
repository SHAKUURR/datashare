import React from "react";

function Vend() {
	function handleBackClick() {
		window.history.back();
	}
	return (
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
	);
}

export default Vend;
