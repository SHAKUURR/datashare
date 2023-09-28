import React from "react";
import { Link } from "react-router-dom";
import "../styles/recoverPassword.css";

function RecoverPassword() {
	return (
		<div className="main-container">
			<img src="/img/logo.png" alt="Topitup logo" />
			<div className="recover-password-form-container">
				<div className="img-cont">
					<img src="/img/padlock.png" alt="Padlock" />
				</div>
				<div className="headerpassword">
					<h2>Recover Password</h2>
					<p>Enter your email to recover your password</p>
				</div>
				<form action="" method="" className="recover-password-form">
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Enter Email"
						required
					/>
					<Link to={"/recoverlink"}>
						<button type="submit">Continue</button>
					</Link>
				</form>
			</div>
		</div>
	);
}

export default RecoverPassword;
