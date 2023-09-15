import React from "react";

function Bundle() {
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
				<h2>Buy Bundle</h2>
				<h3>Network Provider</h3>

				<select
					name="network_provider"
					id="network_provider"
					defaultValue={"mtn"}
				>
					<option value="mtn" hidden disabled>
						Mtn
					</option>
				</select>
				<select name="plan" id="plan" defaultValue={"plan"}>
					<option value="plan" hidden disabled>
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

export default Bundle;
