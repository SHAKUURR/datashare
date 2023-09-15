import React from "react";

function WalletSection() {
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
	</section>;
}

export default WalletSection;
