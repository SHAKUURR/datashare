import React from "react";
import { Link } from "react-router-dom";
import "../styles/recoverLink.css";

function RecoverLink() {
	return (
		<div class="main-container">
			<img src="/img/logo.png" alt="Topitup Logo" />
			<div class="reset-link-form-container">
				<div class="img-cont">
					<img src="/img/message.png" alt="Envelope" />
				</div>
				<div class="text-content">
					<h2>Reset link sent</h2>
					<p>
						Please click link sent to your Email to reset password. If you do
						not see it, you may need to check your spam folder. Need help?
						Contact us.
					</p>
				</div>
				<Link to={"/login"}>
					<a href="login">
						<button>Return to login</button>
					</a>
				</Link>
			</div>
		</div>
	);
}

export default RecoverLink;
