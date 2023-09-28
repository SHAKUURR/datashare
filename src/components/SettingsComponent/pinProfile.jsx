export default function PinProfile() {
	function handleBackClick() {
		window.history.back();
	}
	return (
		<section className="profile">
			<button onClick={handleBackClick} className="back">
				<i className="fa-solid fa-arrow-left"></i> Back
			</button>

			<form action="" method="">
				<h2>Change Pin</h2>
				<input
					type="password"
					name="old_password"
					id="old-password"
					placeholder="Old Pin"
					required
					maxLength="4"
				/>
				<input
					type="password"
					name="new_password"
					id="new-password"
					placeholder="New Pin"
					required
					maxLength="4"
				/>
				<input
					type="password"
					name="confirm_password"
					id="confirm-password"
					placeholder="Confirm Pin"
					required
					maxLength="4"
				/>
				<button type="submit">Save Changes</button>
				<button type="reset">Cancel</button>
			</form>
		</section>
	);
}
