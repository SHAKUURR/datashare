export default function Profile() {
	function handleBackClick() {
		window.history.back();
	}
	return (
		<section className="profile">
			<button onClick={handleBackClick} className="back">
				<i className="fa-solid fa-arrow-left"></i> Back
			</button>

			<form action="" method="">
				<h2>Change Password</h2>
				<input
					type="password"
					name="old_password"
					id="old-password"
					placeholder="Old Password"
					required
				/>
				<input
					type="password"
					name="new_password"
					id="new-password"
					placeholder="New Password"
					required
				/>
				<input
					type="password"
					name="confirm_password"
					id="confirm-password"
					placeholder="Confirm Password"
					required
				/>
				<button type="submit">Save Changes</button>
				<button type="reset">Cancel</button>
			</form>
		</section>
	);
}
