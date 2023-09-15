import React from "react";

function QuickLink() {
	return (
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
	);
}

export default QuickLink;
