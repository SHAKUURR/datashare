export default function FundUserDetails() {
	return (
		<section id="section">
			<div className="credit-details">
				<div className="user-details">
					<div className="img"></div>
					<div className="account">
						<div className="name">Ayo Ayomide</div>
						<div className="number">08163764732</div>
						<div className="wallet">Wallet Balance: N1,000</div>
					</div>
				</div>
				<form action="" method="" id="form2">
					<div className="input">
						<label htmlFor="amount">Amount</label>
						<input type="number" name="amount" id="amount" required />
					</div>
					<div className="input">
						<label htmlFor="remark">Remarks</label>
						<input
							type="text"
							name="remark"
							id="remark"
							placeholder="Optional"
						/>
					</div>
					<button type="submit">Complete</button>
				</form>
			</div>
		</section>
	);
}
