import React from "react";
import { Link } from "react-router-dom";
import "../styles/signup.css";

function Register() {
	return (
		<div className="main">
			<img src="/img/Logo.png" alt="Data Share Portal Logo" />
			<div className="form-container">
				<div className="header">
					<h1>Create an Account</h1>
					<p>Let's get you started</p>
				</div>

				<form action="#" method="post" className="signup-form">
					<p id="error"></p>
					<input
						className="input"
						type="text"
						name="name"
						id="first_name"
						placeholder="Full Name"
					/>
					<input
						className="input"
						type="text"
						name="name"
						id="last_name"
						placeholder="Last Name"
					/>
					<input
						className="input"
						type="email"
						name="email"
						id="email"
						placeholder="Enter Email"
					/>
					<input
						className="input"
						type="text"
						name="name"
						id="username"
						placeholder="Username"
					/>
					<input
						className="input"
						type="tel"
						name="phone_number"
						id="phone-number"
						placeholder="Enter Phone Number"
					/>
					<input
						className="input"
						type="password"
						name="password"
						id="password"
						placeholder="Enter Password"
					/>
					<input
						className="input"
						type="password"
						name="confirm_password"
						id="confirm-password"
						placeholder="Confirm Password"
					/>
					<div className="checkbox-container">
						<input type="checkbox" name="privacy_policy" id="privacy-policy" />
						<p>
							I accept the <a href="terms.com">Terms of Use </a>and
							<a href="privacy.com">Privacy Policy</a>
						</p>
					</div>
					<Link to={"/login"}>
						<button type="submit">
							Create account{" "}
							<span className="spinner hide">
								<i className="fa-solid fa-spinner"></i>
							</span>
						</button>
					</Link>
					<div className="google-login">
						<img src="/img/Group.png" alt="google logo" />
						<a href="https://www.google.com">Login with Google</a>
					</div>
					<p className="login-link">
						Already have an account? <a href="login.html">Sign in</a>
					</p>
				</form>
			</div>
		</div>
	);
}

export default Register;
