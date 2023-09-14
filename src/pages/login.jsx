import React from "react";
import "../styles/login.css";

function Login() {
	return (
		<div className="main">
			<img src="/img/Logo.png" alt="Logo" />
			<div className="form-container">
				<div className="header">
					<h2>Welcome</h2>
					<p>Login to your account</p>
				</div>
				<form action="#" method="post" className="login-form">
					<p id="error"></p>
					<input
						type="text"
						name="username"
						id="username"
						placeholder="Username"
						required
					/>
					<div className="passwordBox">
						<input
							type="password"
							name="password"
							autoComplete="current-password"
							id="password"
							placeholder="Enter Password"
							required
						/>
						<i
							className="far fa-eye"
							id="togglePassword"
							style={{ cursor: "pointer" }}
						></i>
					</div>
					<button type="submit">
						Login{" "}
						<span className="spinner hide">
							<i className="fa-solid fa-spinner"></i>
						</span>
					</button>
					<div className="google-login">
						<img src="/img/Group.png" alt="google logo" />
						<a href="https://www.google.com">Login with Google</a>
					</div>
				</form>
				<div className="forgotPassword">
					<p>
						Forgot password?{" "}
						<a href="recover_password.html">Reset password now</a>
					</p>
				</div>
			</div>
		</div>
	);
}

export default Login;
