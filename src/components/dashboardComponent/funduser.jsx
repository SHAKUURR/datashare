export default function FundUser() {
	function handleBackClick() {
		window.history.back();
	}
	return (
		<section className="credit-user">
			<button onClick={handleBackClick} className="back">
				<i className="fa-solid fa-arrow-left"></i> Back
			</button>

			<form action="" method="">
				<h2>Credit User</h2>
				<input
					type="text"
					name="username"
					id="username"
					placeholder="Find Username"
					required
				/>

				<button type="submit">Save Changes</button>
				<button type="reset">Cancel</button>
			</form>
		</section>
	);
}
