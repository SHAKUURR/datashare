import React from "react";
import "../styles/resetapi.css";
import SideBar from "../components/sidebar";
import Header from "../components/header";
import Activity from "../components/activity";

export default function ResetApi() {
	return (
		<div className="body">
			<SideBar />
			<main>
				<Header />
				<MainContent />
			</main>
		</div>
	);
}

function MainContent() {
	return (
		<section className="main-content">
			<Profile />
			<Activity />
		</section>
	);
}

function Profile() {
	function handleBackClick() {
		window.history.back();
	}
	return (
		<section className="profile">
			<button onClick={handleBackClick} className="back">
				<i className="fa-solid fa-arrow-left"></i> Back
			</button>
			<form action="" method="">
				<h2>Reset API Key</h2>
				<input
					type="text"
					name="api-key"
					id="api-key"
					placeholder="75548dhhrr5788900"
					required
				/>

				<button type="submit">Save Changes</button>
				<button type="reset">Cancel</button>
			</form>
		</section>
	);
}
